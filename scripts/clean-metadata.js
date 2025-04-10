#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function cleanMetadataFiles(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      cleanMetadataFiles(itemPath); // Recursively process subdirectories
    } else if (item.startsWith('._')) {
      console.log(`Removing macOS metadata file: ${itemPath}`);
      fs.unlinkSync(itemPath);
    }
  }
}

// Start from the current directory
try {
  cleanMetadataFiles(process.cwd());
  console.log('Successfully cleaned up macOS metadata files!');
} catch (error) {
  console.error('Error cleaning up metadata files:', error);
  process.exit(1);
} 