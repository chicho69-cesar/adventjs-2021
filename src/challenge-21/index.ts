function canCarry(capacity: number, trip: number[][]): boolean {
  const minPos: number = Math.min(...trip.map((t) => t[1]));
  const maxPos: number = Math.max(...trip.map((t) => t[2]));
  
  const gifsPerStop = [ ...Array(maxPos - minPos).keys() ]
    .map((index: number) => {
      const stop: number = index + minPos;
      return trip
        .filter(([ _, ini, end ]) => stop >= ini && stop < end)
        .reduce((acc: number, [ regalos ]) => acc + regalos, 0);
    })

  return gifsPerStop.every((num: number) => num <= capacity)
}