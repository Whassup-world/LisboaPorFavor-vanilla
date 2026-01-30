#!/usr/bin/env python3
"""
File Parser & Relevance Analyzer
Similar to parse_chrome_bookmarks.py but for project files

Purpose:
- Scan all MD, CSS, JSON files in project
- Extract metadata (size, last modified, content summary)
- Identify duplicates and unused files
- Flag potential pollution (unused CSS, old JSONs)
- Generate organized index

Usage:
    python parse_project_files.py <project_path>
    python parse_project_files.py --analyze-css
    python parse_project_files.py --analyze-json
    python parse_project_files.py --find-duplicates
"""

import os
import json
import hashlib
import re
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import argparse

class ProjectFileParser:
    def __init__(self, project_path):
        self.project_path = Path(project_path)
        self.files_by_type = defaultdict(list)
        self.duplicates = defaultdict(list)
        self.css_usage = {}
        self.json_files = {}
        self.md_files = {}
        
    def scan_files(self, extensions=None):
        """Scan project for files with given extensions"""
        if extensions is None:
            extensions = ['.md', '.css', '.json', '.js', '.jsx', '.tsx']
        
        print(f"📂 Scanning: {self.project_path}")
        print(f"🔍 Looking for: {', '.join(extensions)}\n")
        
        ignore_dirs = {'node_modules', '.git', '.next', 'dist', 'build', 'backups'}
        
        for root, dirs, files in os.walk(self.project_path):
            # Skip ignored directories
            dirs[:] = [d for d in dirs if d not in ignore_dirs]
            
            for file in files:
                file_path = Path(root) / file
                ext = file_path.suffix.lower()
                
                if ext in extensions:
                    file_info = self.get_file_info(file_path)
                    self.files_by_type[ext].append(file_info)
        
        return self.files_by_type
    
    def get_file_info(self, file_path):
        """Extract file metadata"""
        stats = file_path.stat()
        
        # Calculate file hash for duplicate detection
        file_hash = self.calculate_hash(file_path)
        
        # Get first 200 chars as preview
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                preview = f.read(200).replace('\n', ' ')
        except:
            preview = "[Binary or unreadable]"
        
        return {
            'path': str(file_path.relative_to(self.project_path)),
            'name': file_path.name,
            'size': stats.st_size,
            'size_readable': self.format_size(stats.st_size),
            'modified': datetime.fromtimestamp(stats.st_mtime).strftime('%Y-%m-%d %H:%M'),
            'hash': file_hash,
            'preview': preview
        }
    
    def calculate_hash(self, file_path):
        """Calculate MD5 hash for duplicate detection"""
        hash_md5 = hashlib.md5()
        try:
            with open(file_path, "rb") as f:
                for chunk in iter(lambda: f.read(4096), b""):
                    hash_md5.update(chunk)
            return hash_md5.hexdigest()
        except:
            return None
    
    def format_size(self, bytes):
        """Format bytes to human readable"""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if bytes < 1024.0:
                return f"{bytes:.1f}{unit}"
            bytes /= 1024.0
        return f"{bytes:.1f}TB"
    
    def find_duplicates(self):
        """Find duplicate files by content hash"""
        hash_map = defaultdict(list)
        
        for ext, files in self.files_by_type.items():
            for file in files:
                if file['hash']:
                    hash_map[file['hash']].append(file)
        
        # Filter to only duplicates
        self.duplicates = {h: files for h, files in hash_map.items() if len(files) > 1}
        return self.duplicates
    
    def analyze_markdown_files(self):
        """Analyze MD files for metadata and links"""
        md_files = self.files_by_type.get('.md', [])
        
        for file in md_files:
            try:
                with open(self.project_path / file['path'], 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Extract title (first H1)
                title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
                title = title_match.group(1) if title_match else file['name']
                
                # Count sections (H2s)
                sections = len(re.findall(r'^##\s+', content, re.MULTILINE))
                
                # Find links to other MDs
                md_links = re.findall(r'\[.+?\]\((.+?\.md)\)', content)
                
                # Detect if it's old (SESSION_OCT, etc.)
                is_old_session = bool(re.search(r'SESSION_\w+_\d{4}', file['name'], re.IGNORECASE))
                
                self.md_files[file['path']] = {
                    'title': title,
                    'sections': sections,
                    'links': md_links,
                    'is_old_session': is_old_session,
                    'word_count': len(content.split()),
                    'modified': file['modified']
                }
            except:
                pass
        
        return self.md_files
    
    def analyze_css_files(self):
        """Analyze CSS for unused/duplicate rules"""
        css_files = self.files_by_type.get('.css', [])
        
        for file in css_files:
            try:
                with open(self.project_path / file['path'], 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Count rules
                rules = len(re.findall(r'\{[^}]+\}', content))
                
                # Extract imports
                imports = re.findall(r'@import\s+["\'](.+?)["\']', content)
                
                # Check if it's a duplicate template.css or main.css
                is_template = 'template' in file['name'].lower()
                is_main = file['name'].lower() in ['main.css', 'index.css', 'app.css']
                
                self.css_usage[file['path']] = {
                    'rules': rules,
                    'imports': imports,
                    'is_template': is_template,
                    'is_main': is_main,
                    'size': file['size']
                }
            except:
                pass
        
        return self.css_usage
    
    def analyze_json_files(self):
        """Analyze JSON files"""
        json_files = self.files_by_type.get('.json', [])
        
        for file in json_files:
            # Skip package-lock.json (huge)
            if 'package-lock' in file['name']:
                continue
            
            try:
                with open(self.project_path / file['path'], 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                # Detect type
                is_config = file['name'] in ['package.json', 'tsconfig.json', 'jsconfig.json']
                is_data = 'data' in file['path'].lower()
                
                self.json_files[file['path']] = {
                    'type': 'config' if is_config else 'data' if is_data else 'unknown',
                    'keys': list(data.keys()) if isinstance(data, dict) else None,
                    'size': file['size']
                }
            except:
                pass
        
        return self.json_files
    
    def generate_report(self, output_file='FILE_ANALYSIS_REPORT.md'):
        """Generate comprehensive report"""
        report = []
        report.append("# Project Files Analysis Report\n")
        report.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        report.append(f"**Project:** {self.project_path}\n")
        report.append("---\n\n")
        
        # File counts
        report.append("## 📊 File Statistics\n\n")
        for ext, files in sorted(self.files_by_type.items()):
            total_size = sum(f['size'] for f in files)
            report.append(f"- **{ext}**: {len(files)} files ({self.format_size(total_size)})\n")
        report.append("\n")
        
        # Duplicates
        if self.duplicates:
            report.append("## 🔄 Duplicate Files (Potential Cleanup)\n\n")
            for i, (hash, files) in enumerate(self.duplicates.items(), 1):
                report.append(f"### Duplicate Set {i}\n")
                report.append(f"**Size:** {files[0]['size_readable']} each\n\n")
                for file in files:
                    report.append(f"- `{file['path']}`\n")
                report.append("\n")
        
        # Old MD files
        old_mds = [p for p, info in self.md_files.items() if info['is_old_session']]
        if old_mds:
            report.append("## 📦 Old Session Files (Archive Candidates)\n\n")
            for path in sorted(old_mds):
                info = self.md_files[path]
                report.append(f"- `{path}` - {info['modified']} ({info['word_count']} words)\n")
            report.append("\n")
        
        # CSS analysis
        if self.css_usage:
            report.append("## 🎨 CSS Files Analysis\n\n")
            css_by_size = sorted(self.css_usage.items(), key=lambda x: x[1]['size'], reverse=True)
            for path, info in css_by_size:
                report.append(f"### `{path}`\n")
                report.append(f"- **Rules:** {info['rules']}\n")
                report.append(f"- **Size:** {self.format_size(info['size'])}\n")
                if info['imports']:
                    report.append(f"- **Imports:** {', '.join(info['imports'])}\n")
                if info['is_template']:
                    report.append("- ⚠️ **Template CSS** (check if frozen)\n")
                report.append("\n")
        
        # JSON analysis
        if self.json_files:
            report.append("## 📋 JSON Files Analysis\n\n")
            for path, info in sorted(self.json_files.items()):
                report.append(f"### `{path}`\n")
                report.append(f"- **Type:** {info['type']}\n")
                report.append(f"- **Size:** {self.format_size(info['size'])}\n")
                if info['keys']:
                    report.append(f"- **Keys:** {', '.join(info['keys'][:5])}{'...' if len(info['keys']) > 5 else ''}\n")
                report.append("\n")
        
        # Save report
        output_path = self.project_path / output_file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(''.join(report))
        
        print(f"\n✅ Report saved: {output_path}")
        return ''.join(report)

def main():
    parser = argparse.ArgumentParser(description='Parse and analyze project files')
    parser.add_argument('project_path', nargs='?', default='.', help='Path to project')
    parser.add_argument('--analyze-css', action='store_true', help='Deep CSS analysis')
    parser.add_argument('--analyze-json', action='store_true', help='Deep JSON analysis')
    parser.add_argument('--find-duplicates', action='store_true', help='Find duplicate files')
    parser.add_argument('--output', default='FILE_ANALYSIS_REPORT.md', help='Output file')
    
    args = parser.parse_args()
    
    analyzer = ProjectFileParser(args.project_path)
    
    # Scan files
    analyzer.scan_files()
    
    # Find duplicates
    analyzer.find_duplicates()
    
    # Analyze MDs
    analyzer.analyze_markdown_files()
    
    # Analyze CSS if requested
    if args.analyze_css:
        analyzer.analyze_css_files()
    
    # Analyze JSON if requested
    if args.analyze_json:
        analyzer.analyze_json_files()
    
    # Generate report
    analyzer.generate_report(args.output)
    
    print("\n🎯 Analysis complete!")
    print(f"   MD files: {len(analyzer.md_files)}")
    print(f"   CSS files: {len(analyzer.css_usage)}")
    print(f"   JSON files: {len(analyzer.json_files)}")
    print(f"   Duplicate sets: {len(analyzer.duplicates)}")

if __name__ == '__main__':
    main()
