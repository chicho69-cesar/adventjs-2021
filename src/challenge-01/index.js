function countSheeps(sheeps) {
  return sheeps.filter(
    ({ name, color }) => 
      color === 'rojo' && 
      name.toLowerCase().includes('n') && 
      name.toLowerCase().includes('a')
  );
}

function countSheepsAlternative(sheeps) {
  let sheepsArray = [];

  sheeps.forEach(sheep => {
    let loweredName = (sheep.name).toLowerCase();

    if (
      (sheep.color === 'rojo') && 
      (loweredName.includes('a') && loweredName.includes('n'))
    ) {
      sheepsArray.push(sheep);
    }
  });

  return sheepsArray;
}

module.exports = countSheeps;