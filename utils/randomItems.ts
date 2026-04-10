export function getRandomIndexes(total: number, count: number): number[] {
  const indexes = Array.from({ length: total }, (_, i) => i);

  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes.slice(0, count);
}