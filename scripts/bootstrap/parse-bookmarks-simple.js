#!/usr/bin/env node

/**
 * Parse Chrome bookmarks HTML - Simple version without external dependencies
 */

const fs = require('fs');
const path = require('path');

// Utility functions
function convertTimestamp(unixTime) {
  if (!unixTime) return 'Unknown';
  try {
    const date = new Date(parseInt(unixTime) * 1000);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return 'Unknown';
  }
}

function htmlDecode(html) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'"
  };
  return html.replace(/&[a-z]+;/g, match => entities[match] || match);
}

function categorizeBookmark(url, title) {
  const urlLower = (url || '').toLowerCase();
  const titleLower = (title || '').toLowerCase();

  // Tour Operators
  if (['getyourguide', 'withlocals', 'bokun', 'fhapi', 'booking.com', 'viator', 'toursbylocals'].some(x => urlLower.includes(x))) {
    return 'Tour Operators';
  }
  if (titleLower.includes('tour') && ['guide', 'operator', 'booking'].some(x => urlLower.includes(x))) {
    return 'Tour Operators';
  }

  // Travel Blogs
  if (['blog', 'secreta', 'theurgetowander', 'lisbonlux', 'cityguidelisbon', 'thegeographicalcure', 'exploredbymarta'].some(x => urlLower.includes(x))) {
    return 'Travel Blogs';
  }
  if (['blog', 'guide', 'travel', 'hidden gems', 'secret spots'].some(x => titleLower.includes(x))) {
    return 'Travel Blogs';
  }

  // Event Sites
  if (['agendalx', 'timeout', 'agenda', 'eventbrite', 'bandsintown', 'blueticket'].some(x => urlLower.includes(x))) {
    return 'Event Sites';
  }
  if (titleLower.includes('event') || titleLower.includes('festa')) {
    return 'Event Sites';
  }

  // Media/News
  if (['theportugalnews', 'expresso', 'visao', 'nit.pt', 'news', 'media'].some(x => urlLower.includes(x))) {
    return 'Media/News';
  }
  if (['news', 'portugal', 'media'].some(x => titleLower.includes(x))) {
    return 'Media/News';
  }

  // Food/Venues
  if (['mesamarcada', 'musicbox', 'restaurant', 'bar', 'cafe', 'food', 'lojas'].some(x => urlLower.includes(x))) {
    return 'Food/Venues';
  }
  if (['restaurant', 'bar', 'cafe', 'food', 'comida', 'bebida'].some(x => titleLower.includes(x))) {
    return 'Food/Venues';
  }

  // Government/Official
  if (['visitlisboa', 'egeac', 'turismo', 'official', 'governo'].some(x => urlLower.includes(x))) {
    return 'Government/Official';
  }
  if (titleLower.includes('visit') || titleLower.includes('official')) {
    return 'Government/Official';
  }

  // Transportation
  if (['rede-expressos', 'bus', 'transport', 'ride', 'lisboaride'].some(x => urlLower.includes(x))) {
    return 'Transportation';
  }
  if (titleLower.includes('transport') || titleLower.includes('bus')) {
    return 'Transportation';
  }

  // Research/Design
  if (['behance', 'dribbble', 'freepik', 'vector', 'hellovector', 'design', 'template', 'inspiration'].some(x => urlLower.includes(x))) {
    return 'Research/Design';
  }
  if (['design', 'template', 'vector', 'inspiration', 'asset'].some(x => titleLower.includes(x))) {
    return 'Research/Design';
  }

  return 'Other';
}

function parseBookmarks(htmlFile) {
  const html = fs.readFileSync(htmlFile, 'utf-8');
  const bookmarks = [];

  // Simple regex to extract <A> tags
  const linkRegex = /<A\s+HREF="([^"]*)"\s+ADD_DATE="([^"]*)"\s*(?:ICON="[^"]*")?\s*>([^<]*)<\/A>/gi;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const url = htmlDecode(match[1]);
    const dateAdded = match[2];
    const title = htmlDecode(match[3]).trim();

    if (!url || !title) continue;

    bookmarks.push({
      URL: url,
      Title: title,
      'Date Added': convertTimestamp(dateAdded),
      Category: categorizeBookmark(url, title),
      Subcategory: '',
      Priority: '',
      Notes: '',
      Status: ''
    });
  }

  return bookmarks;
}

function createMarkdownFiles(bookmarks, outputDir) {
  const categories = {};

  // Group by category
  bookmarks.forEach(bookmark => {
    const cat = bookmark.Category;
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(bookmark);
  });

  // Create markdown files
  Object.entries(categories).forEach(([category, items]) => {
    // Sort by date (newest first)
    items.sort((a, b) => {
      if (a['Date Added'] === 'Unknown') return 1;
      if (b['Date Added'] === 'Unknown') return -1;
      return new Date(b['Date Added']) - new Date(a['Date Added']);
    });

    const filename = category.toLowerCase().replace(/\//g, '-').replace(/ /g, '-') + '.md';
    const filepath = path.join(outputDir, filename);

    const now = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    let content = `# ${category} - Chrome Bookmarks\n\n`;
    content += `**Total Bookmarks:** ${items.length}\n`;
    content += `**Last Updated:** ${now}\n\n`;
    content += `---\n\n`;

    items.forEach(item => {
      content += `### [${item.Title}](${item.URL})\n`;
      content += `**Added:** ${item['Date Added']}\n\n`;
    });

    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`✓ Created: ${filename} (${items.length} bookmarks)`);
  });
}

function createCSVFile(bookmarks, outputFile) {
  // Create CSV with proper escaping
  const headers = ['URL', 'Title', 'Category', 'Subcategory', 'Date Added', 'Priority', 'Notes', 'Status'];
  
  const escapeCsv = (str) => {
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  // Sort by category, then date
  bookmarks.sort((a, b) => {
    if (a.Category !== b.Category) return a.Category.localeCompare(b.Category);
    if (a['Date Added'] === 'Unknown') return 1;
    if (b['Date Added'] === 'Unknown') return -1;
    return new Date(b['Date Added']) - new Date(a['Date Added']);
  });

  let csv = headers.map(escapeCsv).join(',') + '\n';
  bookmarks.forEach(bookmark => {
    const row = [
      bookmark.URL,
      bookmark.Title,
      bookmark.Category,
      bookmark.Subcategory,
      bookmark['Date Added'],
      bookmark.Priority,
      bookmark.Notes,
      bookmark.Status
    ];
    csv += row.map(escapeCsv).join(',') + '\n';
  });

  fs.writeFileSync(outputFile, csv, 'utf-8');
  console.log(`✓ Created: ${path.basename(outputFile)} (${bookmarks.length} rows)`);
}

function createSummaryReport(bookmarks, outputFile) {
  const categories = {};
  bookmarks.forEach(bookmark => {
    const cat = bookmark.Category;
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(bookmark);
  });

  // Date distribution
  const today = new Date();
  let last30 = 0, last90 = 0, lastYear = 0;

  bookmarks.forEach(b => {
    if (b['Date Added'] === 'Unknown') return;
    const date = new Date(b['Date Added']);
    const days = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    if (days <= 30) last30++;
    if (days <= 90) last90++;
    if (days <= 365) lastYear++;
  });

  const older = bookmarks.length - lastYear;

  let content = `# Chrome Links Analysis Summary\n\n`;
  content += `**Parsed:** ${today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}\n`;
  content += `**Total Bookmarks:** ${bookmarks.length}\n`;
  content += `**Categories:** ${Object.keys(categories).length}\n\n`;
  content += `---\n\n`;

  // Category breakdown
  content += `## Category Breakdown\n\n`;
  content += `| Category | Count | Top 3 Sites |\n`;
  content += `|----------|-------|-------------|\n`;

  Object.entries(categories).sort().forEach(([cat, items]) => {
    const top3 = items.slice(0, 3).map(i => i.Title.substring(0, 25)).join(', ');
    content += `| ${cat} | ${items.length} | ${top3} |\n`;
  });

  content += `\n---\n\n`;
  content += `## Key Findings\n\n`;

  if (categories['Tour Operators']) {
    content += `- **Tour Operators:** ${categories['Tour Operators'].length} bookmarks\n`;
  }
  if (categories['Travel Blogs']) {
    content += `- **Travel Blogs:** ${categories['Travel Blogs'].length} bookmarks\n`;
  }
  if (categories['Event Sites']) {
    content += `- **Event Sites:** ${categories['Event Sites'].length} bookmarks\n`;
  }

  content += `\n---\n\n`;
  content += `## Date Distribution\n\n`;
  content += `- Last 30 days: ${last30} bookmarks\n`;
  content += `- Last 90 days: ${last90} bookmarks\n`;
  content += `- Last year: ${lastYear} bookmarks\n`;
  content += `- Older: ${older} bookmarks\n`;
  content += `\n---\n\n`;
  content += `## Recommended Actions\n\n`;
  content += `1. Review Tour Operators for partnership opportunities\n`;
  content += `2. Extract content from Travel Blogs for inspiration\n`;
  content += `3. Monitor Event Sites for activity updates\n`;
  content += `4. Organize research/design assets for reuse\n`;

  fs.writeFileSync(outputFile, content, 'utf-8');
  console.log(`✓ Created: ${path.basename(outputFile)}`);
}

function main() {
  const htmlFile = path.join(__dirname, '..', '..', '## LBPF links', 'bookmarks_10_26_25.html');
  const outputBase = path.join(__dirname, '..', 'data', 'chrome-links');
  const categorizedDir = path.join(outputBase, 'categorized');

  // Create directories
  if (!fs.existsSync(categorizedDir)) {
    fs.mkdirSync(categorizedDir, { recursive: true });
  }

  console.log('🔍 Parsing Chrome bookmarks...');
  const bookmarks = parseBookmarks(htmlFile);
  console.log(`✓ Found ${bookmarks.length} bookmarks\n`);

  console.log('📝 Creating markdown files...');
  createMarkdownFiles(bookmarks, categorizedDir);

  console.log('\n📊 Creating CSV file...');
  const csvFile = path.join(outputBase, 'chrome-links-full.csv');
  createCSVFile(bookmarks, csvFile);

  console.log('\n📋 Creating summary report...');
  const summaryFile = path.join(outputBase, 'summary.md');
  createSummaryReport(bookmarks, summaryFile);

  console.log('\n✅ All files created successfully!');
  console.log(`\n📁 Output directory: ${outputBase}`);
}

main();
