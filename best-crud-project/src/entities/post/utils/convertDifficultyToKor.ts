import { Difficulty } from "../types/post-type";

export function convertDifficultyToKorean(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return '하';
    case 'medium':
      return '중';
    case 'hard':
      return '상';
    default:
      return ''; 
  }
}
