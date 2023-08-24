import { SectionsType } from '@/types/data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNameByNumber(sections: SectionsType, currentNumber: number) {
  const section = sections.reduce((prev, curr) => {
    if (curr.number <= currentNumber && curr.number > prev.number) {
      return curr;
    }
    return prev;
  });

  return section ? section.name : 'Unknown';
}
