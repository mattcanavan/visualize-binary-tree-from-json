import React from 'react';
import './App.css';

/// COMPONENTS ///
import InputForm from './components/InputForm.js';
import Output from './components/Output.js';

/// UTILS ///
import { build_tree_from_json } from './utils/buildTreeFromJSON.js';
import { breadth_first_traversal } from './utils/breadthFirstTraversal.js';


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
  const [JSONtree, setJSONtree] = React.useState();
  const [BFTarray, setBFTarray] = React.useState();

  /// useEFFECT ///
  // 1. build JSONtree on any changes to userInput field
  React.useEffect(() => {
    setJSONtree(build_tree_from_json(userInput.userInput));
  }, [userInput]);

  // 2. build bread_first_trav array on any changes to JSONtree
  React.useEffect(() => {
    setBFTarray(breadth_first_traversal(JSONtree));
  }, [JSONtree]);

  return (
    <div className="App">
      <div className="App__flexcontainer">

        <InputForm setUserInput={setUserInput} userInput={userInput} />

        <Output BFTarray={BFTarray} JSONtree={JSONtree} />

      </div>
    </div>
  );
}

export default App;
