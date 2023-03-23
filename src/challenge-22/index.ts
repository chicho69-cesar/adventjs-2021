function countDecorations(tree: any): number {
  const leftDecorations: number = tree.left 
    ? countDecorations(tree.left) : 0;
  const rightDecorations: number = tree.right 
    ? countDecorations(tree.right) : 0;

  return tree.value + leftDecorations + rightDecorations;
}