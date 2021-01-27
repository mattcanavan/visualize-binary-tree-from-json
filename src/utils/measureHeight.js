//measure height of tree
function measure_height(tree) {
  if (tree === null) {
    return 0;
  }

  let left_height = measure_height(tree.left);
  let right_height = measure_height(tree.right);

  let results = Math.max(left_height, right_height);

  return results + 1;
}

export { measure_height }
