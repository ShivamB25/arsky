import sharp from 'sharp';
import fs from 'fs/promises';
import { MAX_WIDTH, ASCII_CHARACTERS } from '../config/constants';
import logger from '../utils/logger';

export async function generateAsciiArt(
  imagePath: string,
  maxWidth: number = MAX_WIDTH
): Promise<string> {
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const { data, info } = await sharp(imageBuffer)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height } = info;
    const numChars = ASCII_CHARACTERS.length - 1;
    let asciiArt = '';

    for (let y = 0; y < height; y += 2) {
      for (let x = 0; x < width; x++) {
        const pixelIndex = y * width + x;
        const pixelBrightness = data[pixelIndex];
        const charIndex = Math.floor((pixelBrightness / 255) * numChars);
        asciiArt += ASCII_CHARACTERS[charIndex];
      }
      asciiArt += '\n';
    }

    return asciiArt;
  } catch (err) {
    logger.error('Error generating ASCII art:', err);
    throw new Error('Failed to generate ASCII art');
  }
}
