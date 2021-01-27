// outputs breadth first traversal array for given JSON tree

function breadth_first_traversal(tree){

    // catch null case
    if (tree === null){
      return null
    }

    const results = [];
    const queue = [];
    queue.push(tree);

    while (queue.length > 0) {
      let node = queue.shift();

       //unsure how to fix this bug
      if (node === undefined){
        break
      }

      if (node === "None") {
        results.push("None")
        continue
      } else {
        results.push(node.value)
      }

      // check left
      if (node.left === null) {
        queue.push("None")
      } else{
        queue.push(node.left)
      }

      // check right
      if (node.right === null) {
        queue.push("None")
      } else{
        queue.push(node.right)
      }
    }
    return results
  }

  export { breadth_first_traversal }