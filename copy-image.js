// This is a simple script to help copy your profile image to the correct location
// You can run this script with Node.js after placing your image in the project root

const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourcePath = path.join(__dirname, 'profile.jpg'); // Assuming the image is in the project root
const destDir = path.join(__dirname, 'public', 'images');
const destPath = path.join(destDir, 'profile.jpg');

// Create the images directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  console.log('Creating images directory...');
  fs.mkdirSync(destDir, { recursive: true });
}

// Check if source image exists
if (!fs.existsSync(sourcePath)) {
  console.error('Error: profile.jpg not found in the project root directory.');
  console.log('Please place your profile image in the project root and name it "profile.jpg"');
  process.exit(1);
}

// Copy the image
try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('Success! Your profile image has been copied to public/images/profile.jpg');
  console.log('The image will now appear as the background of your website.');
} catch (error) {
  console.error('Error copying the file:', error.message);
  process.exit(1);
} 