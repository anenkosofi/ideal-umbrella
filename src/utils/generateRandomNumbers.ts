export const generateRandomNumbers = (): number[] => {
  const min = 0;
  const max = 15;
  const count = 4;
  const randomNumbers = new Set<number>();

  while (randomNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
};
