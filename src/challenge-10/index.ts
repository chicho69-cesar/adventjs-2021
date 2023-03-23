function getCoins(change: number): number[] {
  return [ 50, 20, 10, 5, 2, 1 ]
    .map((value: number) => {
      const coins: number = Math.floor(change / value);
      change %= value;

      return coins;
    })
    .reverse();
}