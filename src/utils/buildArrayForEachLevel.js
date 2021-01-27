import { measure_height } from './measureHeight.js'

//draw tree (pyramid)
function build_array_for_each_level(arrayIn, tree) {
  // for each row, how many nodes are possible
  const row_and_nodes = {
    // row: nodes
    0: 1,
    1: 2,
    2: 4,
    3: 8,
    4: 16,
    5: 32,
    6: 64,
  };

  // how can i avoid doing this?
  if (tree === undefined) {
    return null;
  }

  // first, measure tree height w/given function
  let lh = measure_height(tree.left);
  let rh = measure_height(tree.right);
  const max_height = Math.max(lh, rh);

  // now, we know how many levels to make
  const results = [];
  for (let i = 0; i <= max_height; i++) {

    // calc slicing indices
    let start = row_and_nodes[i] - 1;
    let end = row_and_nodes[i + 1] - 1; //not inclusive

    // slice returns an array that represents a level, store these levels in another array
    results.push(arrayIn.slice(start, end));
  }
  return results;
}

export { build_array_for_each_level }