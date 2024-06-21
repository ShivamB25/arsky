import { PATH_MAP, DEFAULT_PATHS } from '../config/constants';

export function getUrlPath(input: string): string {
  const firstLetter = input.charAt(0).toLowerCase();
  return PATH_MAP[firstLetter] || DEFAULT_PATHS.find(path => path.includes(firstLetter)) || '';
}
