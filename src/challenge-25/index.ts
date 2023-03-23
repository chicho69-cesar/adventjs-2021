function canMouseEat(direction: string, game: string[][]): boolean {
  let row: number = game.findIndex((row: string[]) => row.includes('m'));
  let col: number = game[row].indexOf('m');

  switch (direction) {
    case 'up':
      row--;
      break;
    case 'down':
      row++;
      break;
    case 'right':
      col++;
      break;
    case 'left':
      col--;
      break;
  }
  
  try {
    return game[row][col] === '*';
  } catch (error) {
    return false;
  }
}