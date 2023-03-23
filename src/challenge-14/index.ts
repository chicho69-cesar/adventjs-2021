function missingReindeer(ids: number[]): number {
  const unpaired: (number | undefined) = ids
    .sort((a: number, b: number) => a - b)
    .find((id: number, index: number) => id !== index);

  return unpaired ? unpaired - 1 : ids.length;
}