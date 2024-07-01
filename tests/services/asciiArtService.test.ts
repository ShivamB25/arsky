import { generateAsciiArt } from '../../src/services/imageService';
import sharp from 'sharp';
import fs from 'fs/promises';

jest.mock('sharp');
jest.mock('fs/promises');

describe('imageService', () => {
  it('should generate ASCII art successfully', async () => {
    const mockBuffer = Buffer.from('mock image data');
    const mockSharpInstance = {
      resize: jest.fn().mockReturnThis(),
      greyscale: jest.fn().mockReturnThis(),
      raw: jest.fn().mockReturnThis(),
      toBuffer: jest.fn().mockResolvedValue({
        data: new Uint8Array([128, 128, 128, 128]),
        info: { width: 2, height: 2 },
      }),
    };

    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(mockBuffer);
    (sharp as unknown as jest.MockedFunction<typeof sharp>).mockReturnValue(
      mockSharpInstance as any
    );

    const result = await generateAsciiArt('test.jpg');
    expect(result).toBeTruthy();
    expect(result.split('\n').length).toBeGreaterThan(1);
  });

  it('should throw an error when generation fails', async () => {
    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockRejectedValue(
      new Error('File not found')
    );

    await expect(generateAsciiArt('nonexistent.jpg')).rejects.toThrow(
      'Failed to generate ASCII art'
    );
  });
});
