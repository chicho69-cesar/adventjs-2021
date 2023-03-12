function countSheeps(sheeps: { 
  name: string, 
  color: string 
}[]): { name: string, color: string }[] {
  return sheeps.filter(
    ({ name, color }) => 
      color === 'rojo' && 
      name.toLowerCase().includes('n') && 
      name.toLowerCase().includes('a')
  );
}