import { getAscii } from '../../src/services/asciiArtService';
import axios from 'axios';

jest.mock('axios');

describe('asciiArtService', () => {
  it('should fetch ASCII art successfully', async () => {
    const mockArt = 'Mock ASCII Art';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockArt });

    const result = await getAscii('test');
    expect(result).toBe(mockArt);
  });

  it('should throw an error when fetch fails', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error('Network error')
    );

    await expect(getAscii('test')).rejects.toThrow('Failed to fetch ASCII art');
  });
});
