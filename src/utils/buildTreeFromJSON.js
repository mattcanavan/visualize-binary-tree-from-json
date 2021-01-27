import { Tree } from './treeClass.js'

  function build_tree_from_json(jsonIn) {
    function build_tree(root_data) {

      // bug if this statement is missing
      if (root_data === undefined){
        return null
      }

      if (root_data === null) {
        return null;
      }

      let new_node = new Tree(root_data["value"]);
      new_node.left = build_tree(root_data["left"]);
      new_node.right = build_tree(root_data["right"]);

      return new_node;
    }

    const root = build_tree(JSON.parse(jsonIn)); //where should we be parsing the userInput??

    return root;
  }

export { build_tree_from_json }