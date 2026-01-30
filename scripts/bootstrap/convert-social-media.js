const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Social Media Platform Specifications
const SM_SPECS = {
  instagram: {
    post: { width: 1080, height: 1080, quality: 85 },
    story: { width: 1080, height: 1920, quality: 85 },
    reel: { width: 1080, height: 1920, quality: 85 }
  },
  facebook: {
    post: { width: 1200, height: 630, quality: 85 },
    story: { width: 1080, height: 1920, quality: 85 }
  },
  twitter: {
    post: { width: 1200, height: 675, quality: 85 },
    profile: { width: 400, height: 400, quality: 90 }
  },
  linkedin: {
    post: { width: 1200, height: 627, quality: 85 },
    profile: { width: 400, height: 400, quality: 90 }
  }
}

// Configuration
const INPUT_DIR = 'public/images/_rawslug'
const OUTPUT_DIR = 'public/images/social-media'
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp']

async function createSocialMediaVersions(inputPath, filename) {
  const baseName = path.basename(filename, path.extname(filename))
  const results = []

  for (const [platform, formats] of Object.entries(SM_SPECS)) {
    const platformDir = path.join(OUTPUT_DIR, platform)
    
    if (!fs.existsSync(platformDir)) {
      fs.mkdirSync(platformDir, { recursive: true })
    }

    for (const [format, specs] of Object.entries(formats)) {
      const outputPath = path.join(platformDir, `${baseName}-${format}.webp`)
      
      try {
        // Smart cropping based on aspect ratio
        const { width, height, quality } = specs
        const aspectRatio = width / height
        
        await sharp(inputPath)
          .resize(width, height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality })
          .toFile(outputPath)

        const inputSize = fs.statSync(inputPath).size
        const outputSize = fs.statSync(outputPath).size
        const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1)
        
        results.push({
          platform,
          format,
          size: `${width}x${height}`,
          savings,
          path: outputPath
        })
        
      } catch (error) {
        console.error(`❌ Failed ${platform}-${format}:`, error.message)
      }
    }
  }
  
  return results
}

async function createThumbnails(inputPath, filename) {
  const baseName = path.basename(filename, path.extname(filename))
  const thumbDir = path.join(OUTPUT_DIR, 'thumbnails')
  
  if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir, { recursive: true })
  }

  const thumbnailSizes = [
    { name: 'small', width: 150, height: 150 },
    { name: 'medium', width: 300, height: 300 },
    { name: 'large', width: 600, height: 600 }
  ]

  for (const thumb of thumbnailSizes) {
    const outputPath = path.join(thumbDir, `${baseName}-${thumb.name}.webp`)
    
    try {
      await sharp(inputPath)
        .resize(thumb.width, thumb.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(outputPath)
        
      console.log(`📱 Thumbnail: ${thumb.name} (${thumb.width}x${thumb.height})`)
    } catch (error) {
      console.error(`❌ Thumbnail failed:`, error.message)
    }
  }
}

async function processDirectory(inputDir) {
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ Input directory ${inputDir} does not exist!`)
    return
  }

  const files = fs.readdirSync(inputDir)
  let totalProcessed = 0
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file)
    const stat = fs.statSync(inputPath)
    
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase()
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        console.log(`\n🎨 Processing: ${file}`)
        console.log('─'.repeat(40))
        
        // Create social media versions
        const results = await createSocialMediaVersions(inputPath, file)
        
        // Display results
        results.forEach(result => {
          console.log(`✅ ${result.platform}-${result.format} (${result.size}) - ${result.savings}% smaller`)
        })
        
        // Create thumbnails
        await createThumbnails(inputPath, file)
        
        totalProcessed++
      }
    }
  }
  
  return totalProcessed
}

async function main() {
  console.log('📱 Social Media Image Converter')
  console.log('🎯 Platforms: Instagram, Facebook, Twitter, LinkedIn')
  console.log('📐 Formats: Posts, Stories, Profiles')
  console.log('─'.repeat(50))
  
  const startTime = Date.now()
  const processed = await processDirectory(INPUT_DIR)
  const endTime = Date.now()
  
  console.log('\n' + '─'.repeat(50))
  console.log(`✨ Processed ${processed} images in ${endTime - startTime}ms`)
  console.log(`📁 Output: ${OUTPUT_DIR}`)
  console.log('\n📱 Social Media Sizes Created:')
  
  Object.entries(SM_SPECS).forEach(([platform, formats]) => {
    console.log(`\n${platform.toUpperCase()}:`)
    Object.entries(formats).forEach(([format, specs]) => {
      console.log(`  • ${format}: ${specs.width}x${specs.height}`)
    })
  })
}

main().catch(console.error)
