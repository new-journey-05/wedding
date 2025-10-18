#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

// Simple image organizer - copies images to the correct directories

const config = {
  inputDir: './src-images',
  outputDir: './public/images',
  categories: ['engagement', 'venue', 'ceremony', 'backgrounds']
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function copyFile(src, dest) {
  try {
    await fs.copyFile(src, dest);
    console.log(`Copied: ${path.basename(src)}`);
  } catch (error) {
    console.error(`Error copying ${src}:`, error.message);
  }
}

async function processCategory(category) {
  const inputPath = path.join(config.inputDir, category);
  const outputPath = path.join(config.outputDir, category);

  try {
    await fs.access(inputPath);
  } catch {
    console.log(`No source directory found: ${inputPath}`);
    return;
  }

  await ensureDir(outputPath);

  try {
    const files = await fs.readdir(inputPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      return;
    }

    console.log(`📂 ${category}: ${imageFiles.length} images`);
    
    for (const file of imageFiles) {
      const srcPath = path.join(inputPath, file);
      const destPath = path.join(outputPath, file);
      await copyFile(srcPath, destPath);
    }
  } catch (error) {
    console.error(`Error processing category ${category}:`, error.message);
  }
}

async function main() {
  console.log('� Copying images to public directory...');

  // Ensure output directory exists
  await ensureDir(config.outputDir);

  // Process each category
  for (const category of config.categories) {
    await processCategory(category);
  }

  console.log('✅ Image copying complete!');
}

main().catch(console.error);