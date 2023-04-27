export function shuffleArray<T>(arr: T[], it = 0): T[] {
  for (let i = 0; i < arr.length; i++) {
    const index = getRndNumber(0, arr.length);
    const swap = arr[index];
    arr[index] = arr[i];
    arr[i] = swap;
  }

  if (it < 15) {
    return shuffleArray(arr, it + 1);
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
