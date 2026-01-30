#!/usr/bin/env node
/**
 * Parse Chrome bookmarks HTML export and categorize into markdown files and Excel spreadsheet.
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const ExcelJS = require('exceljs');

function convertTimestamp(unixTime) {
  if (unixTime) {
    try {
      const date = new Date(parseInt(unixTime) * 1000);
      return date.toISOString().split('T')[0];
    } catch (e) {
      return 'Unknown';
    }
  }
  return 'Unknown';
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
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  const bookmarks = [];
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const url = link.getAttribute('href');
    const title = link.textContent.trim();
    const dateAdded = link.getAttribute('add_date');

    if (url && title) {
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
  });

  return bookmarks;
}

function createMarkdownFiles(bookmarks, outputDir) {
  const categories = {};

  bookmarks.forEach(bookmark => {
    const cat = bookmark.Category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(bookmark);
  });

  Object.entries(categories).forEach(([category, items]) => {
    items.sort((a, b) => {
      if (a['Date Added'] === 'Unknown') return 1;
      if (b['Date Added'] === 'Unknown') return -1;
      return new Date(b['Date Added']) - new Date(a['Date Added']);
    });

    const filename = category.toLowerCase().replace(/\//g, '-').replace(/ /g, '-') + '.md';
    const filepath = path.join(outputDir, filename);

    let content = `# ${category} - Chrome Bookmarks\n\n`;
    content += `**Total Bookmarks:** ${items.length}\n`;
    content += `**Last Updated:** ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}\n\n`;
    content += `---\n\n`;

    items.forEach(item => {
      content += `### [${item.Title}](${item.URL})\n`;
      content += `**Added:** ${item['Date Added']}\n\n`;
    });

    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`✓ Created: ${filename} (${items.length} bookmarks)`);
  });
}

async function createExcelFile(bookmarks, outputFile) {
  bookmarks.sort((a, b) => {
    if (a.Category !== b.Category) {
      return a.Category.localeCompare(b.Category);
    }
    if (a['Date Added'] === 'Unknown') return 1;
    if (b['Date Added'] === 'Unknown') return -1;
    return new Date(b['Date Added']) - new Date(a['Date Added']);
  });

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Bookmarks');

  worksheet.columns = [
    { header: 'URL', key: 'URL', width: 40 },
    { header: 'Title', key: 'Title', width: 35 },
    { header: 'Category', key: 'Category', width: 18 },
    { header: 'Subcategory', key: 'Subcategory', width: 15 },
    { header: 'Date Added', key: 'Date Added', width: 12 },
    { header: 'Priority', key: 'Priority', width: 10 },
    { header: 'Notes', key: 'Notes', width: 20 },
    { header: 'Status', key: 'Status', width: 10 }
  ];

  worksheet.addRows(bookmarks);

  // Freeze header row
  worksheet.views = [{ state: 'frozen', ySplit: 1 }];

  // Add autofilter
  if (worksheet.autoFilter) {
    worksheet.autoFilter.from = 'A1';
    worksheet.autoFilter.to = `H${bookmarks.length + 1}`;
  } else {
    worksheet.autoFilter = { from: 'A1', to: `H${bookmarks.length + 1}` };
  }

  // Format header row
  worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } };
  worksheet.getRow(1).alignment = { horizontal: 'center', vertical: 'center', wrapText: true };

  await workbook.xlsx.writeFile(outputFile);
  console.log(`✓ Created: ${path.basename(outputFile)} (${bookmarks.length} rows)`);
}

function createSummaryReport(bookmarks, outputFile) {
  const categories = {};
  bookmarks.forEach(bookmark => {
    const cat = bookmark.Category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(bookmark);
  });

  const today = new Date();
  const last30 = bookmarks.filter(b => {
    if (b['Date Added'] === 'Unknown') return false;
    const days = Math.floor((today - new Date(b['Date Added'])) / (1000 * 60 * 60 * 24));
    return days <= 30;
  }).length;

  const last90 = bookmarks.filter(b => {
    if (b['Date Added'] === 'Unknown') return false;
    const days = Math.floor((today - new Date(b['Date Added'])) / (1000 * 60 * 60 * 24));
    return days <= 90;
  }).length;

  const last365 = bookmarks.filter(b => {
    if (b['Date Added'] === 'Unknown') return false;
    const days = Math.floor((today - new Date(b['Date Added'])) / (1000 * 60 * 60 * 24));
    return days <= 365;
  }).length;

  const older = bookmarks.length - last365;

  let content = `# Chrome Links Analysis Summary\n\n`;
  content += `**Parsed:** ${today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} at ${today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} UTC\n`;
  content += `**Total Bookmarks:** ${bookmarks.length}\n`;
  content += `**Categories:** ${Object.keys(categories).length}\n\n`;
  content += `---\n\n`;

  content += `## Category Breakdown\n\n`;
  content += `| Category | Count | Top 3 Sites |\n`;
  content += `|----------|-------|-------------|\n`;

  Object.keys(categories).sort().forEach(cat => {
    const items = categories[cat];
    const top3 = items.slice(0, 3).map(item => item.Title.substring(0, 25)).join(', ');
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
  content += `- Last year: ${last365} bookmarks\n`;
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

async function main() {
  const htmlFile = 'd:\\Backup and Documents\\W\\Windsurf\\## LBPF links\\bookmarks_10_26_25.html';
  const outputBase = 'd:\\Backup and Documents\\W\\Windsurf\\lisboaporfavor-bootstrap\\data\\chrome-links';
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

  console.log('\n📊 Creating Excel spreadsheet...');
  await createExcelFile(bookmarks, path.join(outputBase, 'chrome-links-full.xlsx'));

  console.log('\n📋 Creating summary report...');
  createSummaryReport(bookmarks, path.join(outputBase, 'summary.md'));

  console.log('\n✅ All files created successfully!');
  console.log(`\n📁 Output directory: ${outputBase}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
