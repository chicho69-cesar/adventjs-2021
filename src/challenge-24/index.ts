function checkIsSameTree(treeA: any, treeB: any): boolean {
  const checkTrees = function (treeA: any, treeB: any): any {
    if (!treeA && !treeB) return true;
    if (!treeA && treeB) return false;
    if (treeA && !treeB) return false;
    if (treeA.value !== treeB.value) return false;

    return (
      checkTrees(treeA.left, treeB.left) && checkTrees(treeA.right, treeB.right)
    );
  }

  const inverseTree = function (tree: any): any {
    return JSON.parse(
      JSON.stringify(tree)
        .replaceAll('left', 'tmp')
        .replaceAll('right', 'left')
        .replaceAll('tmp', 'right')
    )
  }

  return checkTrees(treeA, treeB) || checkTrees(treeA, inverseTree(treeB))
}