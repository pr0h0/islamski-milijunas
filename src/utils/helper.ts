export function shuffleArray<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    let index: number;
    do {
      index = getRndNumber(0, arr.length);
    } while (index === i);

    const swap = arr[index];
    arr[index] = arr[i];
    arr[i] = swap;
  }

  return arr;
}

export function getRndNumber(min: number, max?: number) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}
