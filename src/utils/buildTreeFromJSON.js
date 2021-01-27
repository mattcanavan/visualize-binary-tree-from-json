import { Tree } from './treeClass.js'

  function build_tree_from_json(clean_json) {
    function build_tree(root_data) {
      if (root_data === null) {
        return null;
      }

      let new_node = new Tree(root_data["value"]);
      new_node.left = build_tree(root_data["left"]);
      new_node.right = build_tree(root_data["right"]);

      return new_node;
    }

    const root = build_tree(clean_json);

    return root;
  }

export { build_tree_from_json }