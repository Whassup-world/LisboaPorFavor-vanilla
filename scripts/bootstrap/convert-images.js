const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Configuration
const INPUT_DIR = 'public/images/_rawslug'
const OUTPUT_DIR = 'public/images'
const QUALITY = 80 // WebP quality (0-100)

// Supported input formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp']

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath)
    
    const inputSize = fs.statSync(inputPath).size
    const outputSize = fs.statSync(outputPath).size
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1)
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`)
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message)
  }
}

async function processDirectory(inputDir, outputDir) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const files = fs.readdirSync(inputDir)
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file)
    const stat = fs.statSync(inputPath)
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subOutputDir = path.join(outputDir, file)
      await processDirectory(inputPath, subOutputDir)
    } else {
      const ext = path.extname(file).toLowerCase()
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        const baseName = path.basename(file, ext)
        const outputPath = path.join(outputDir, `${baseName}.webp`)
        
        // Skip if WebP already exists and is newer
        if (fs.existsSync(outputPath)) {
          const inputTime = fs.statSync(inputPath).mtime
          const outputTime = fs.statSync(outputPath).mtime
          
          if (outputTime > inputTime) {
            console.log(`⏭️  Skipping ${file} (already converted)`)
            continue
          }
        }
        
        await convertToWebP(inputPath, outputPath)
      } else {
        console.log(`⚠️  Skipping ${file} (unsupported format)`)
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image conversion to WebP...')
  console.log(`📁 Input: ${INPUT_DIR}`)
  console.log(`📁 Output: ${OUTPUT_DIR}`)
  console.log(`🎨 Quality: ${QUALITY}%`)
  console.log('─'.repeat(50))
  
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Input directory ${INPUT_DIR} does not exist!`)
    process.exit(1)
  }
  
  const startTime = Date.now()
  await processDirectory(INPUT_DIR, OUTPUT_DIR)
  const endTime = Date.now()
  
  console.log('─'.repeat(50))
  console.log(`✨ Conversion completed in ${endTime - startTime}ms`)
}

main().catch(console.error)
