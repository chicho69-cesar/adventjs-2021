function shouldBuyFidelity(times: number): boolean {
  const fidelityPrice: number = [ ...Array(times).keys() ]
    .reduce((acc: number, value: number) => {
      return acc + 12 * Math.pow(0.75, value + 1)
    }, 250);

  return fidelityPrice < times * 12;
}