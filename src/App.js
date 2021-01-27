import React from 'react';
import './App.css';

/// COMPONENTS ///
import InputForm from './components/InputForm.js';
import DisplayTree from './components/DisplayTree.js'


function App() {
  /// INITIAL STATE ///
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
  const [finishedTree, setFinishedTree] = React.useState();
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
  function bread_first_traversal(tree){

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

  // useEFFECT
  // 1. build tree on any changes to userInput field
  React.useEffect(() => {
    let data = build_tree_from_json(userInput.userInput);
    setFinishedTree(data)
    console.log("finishedTree...", finishedTree)
  }, [userInput]);

  // 2. build bread_first array
  React.useEffect( () => {
    let data = bread_first_traversal(finishedTree)
    setOutput(data)
    console.log("finished breadth search...", output)
  }, [finishedTree])


  return (
    <div className="App">
      <div className="App__flexcontainer">
      <InputForm setUserInput={setUserInput} userInput={userInput} />

      <DisplayTree breadth_first_trav_array={output} />
      </div>
    </div>
  );
}

export default App;
