// Simple test to verify Cloudinary credentials
import 'dotenv/config';

const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'sadik',
};

console.log('Cloudinary Configuration:');
console.log('Cloud Name:', cloudinaryConfig.cloudName);
console.log('API Key:', cloudinaryConfig.apiKey);
console.log('API Secret:', cloudinaryConfig.apiSecret ? '[HIDDEN]' : 'NOT SET');
console.log('Folder:', cloudinaryConfig.folder);

// Basic validation
if (
  !cloudinaryConfig.cloudName ||
  !cloudinaryConfig.apiKey ||
  !cloudinaryConfig.apiSecret
) {
  console.error('❌ Missing Cloudinary credentials!');
  process.exit(1);
} else {
  console.log('✅ Cloudinary credentials appear to be set');
}
