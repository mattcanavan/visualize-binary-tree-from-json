import React from 'react';
import './App.css';

/// COMPONENTS ///
import InputForm from './components/InputForm.js';


function App() {
  /// INITIAL STATE (GLOBAL) ///
  const [userInput, setUserInput] = React.useState({
    userInput: JSON.parse(`{
    "value": 5,
    "left": {
        "value": 7,
        "left": null,
        "right": null
    },
    "right": {
        "value": 22,
        "left": {
            "value": 17,
            "left": null,
            "right": null
        },
        "right": {
            "value": 9,
            "left": null,
            "right": null
        }
    }
}`),
  });
  const [output, setOutput] = React.useState();

  /// HELPER FUNCTIONS ///

  // Build Tree from (already parsed) JSON
  class Tree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

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

  // Build OUTPUT Array
  // function bread_first_traversal(tree){

  //   // catch null case
  //   if (tree === null){
  //     return null
  //   }

  //   const results = [];
  //   const queue = [];
  //   queue.append(tree);

  //   while (queue.length > 0) {
  //     let node = queue.pop(0);

  //     if (node === "None") {
  //       results.append("None")
  //       continue
  //     } else {
  //       results.append(node.value)
  //     }

  //     if (node.left === null)

  //   }
  // }

  // useEFFECT
  // 1. build tree on any changes to userInput field
  React.useEffect(() => {
    console.log("useEffect..", build_tree_from_json(userInput.userInput));
  }, [userInput]);

  return (
    <div className="App">
      <InputForm setUserInput={setUserInput} userInput={userInput} />
    </div>
  );
}

export default App;
