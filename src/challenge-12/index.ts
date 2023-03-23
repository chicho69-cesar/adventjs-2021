function getMinJump(obstacles: number[]): number {
  if (obstacles.length === 0) return 1;

  for (let step: number = 2; ; step++) {
    if (obstacles.every(obstacle => obstacle % step !== 0)) {
      return step;
    }
  }
}