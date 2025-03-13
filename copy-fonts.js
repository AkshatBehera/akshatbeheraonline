// This is a simple script to help copy your Gotham-Light font file to the correct location
// You can run this script with Node.js after placing your font file in a 'gotham-fonts' folder in the project root

const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourceDir = path.join(__dirname, 'gotham-fonts'); // Assuming the fonts are in a 'gotham-fonts' folder
const destDir = path.join(__dirname, 'public', 'fonts');

// Create the fonts directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  console.log('Creating fonts directory...');
  fs.mkdirSync(destDir, { recursive: true });
}

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error('Error: gotham-fonts directory not found in the project root.');
  console.log('Please create a directory named "gotham-fonts" in the project root and place your Gotham-Light font file there.');
  process.exit(1);
}

// Get all font files from the source directory
const fontFiles = fs.readdirSync(sourceDir).filter(file => 
  file.toLowerCase().includes('gotham') && 
  file.toLowerCase().includes('light') && 
  (file.endsWith('.otf') || file.endsWith('.ttf'))
);

if (fontFiles.length === 0) {
  console.error('Error: No Gotham-Light font files (.otf or .ttf) found in the gotham-fonts directory.');
  process.exit(1);
}

// Copy the font files
let copiedFiles = 0;
console.log('Copying font files...');

fontFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const extension = path.extname(file); // .otf or .ttf
  const destPath = path.join(destDir, `Gotham-Light${extension}`);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${file} -> Gotham-Light${extension}`);
    copiedFiles++;
  } catch (error) {
    console.error(`Error copying ${file}:`, error.message);
  }
});

if (copiedFiles > 0) {
  console.log(`\nSuccess! Gotham-Light font file has been copied to public/fonts/`);
  console.log('The Gotham-Light font will now be used throughout your website.');
} else {
  console.error('No font files were copied. Please check the errors above.');
  process.exit(1);
} 