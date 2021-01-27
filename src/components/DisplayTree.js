import React from 'react';

/// STYLE
import './DisplayTree.css';


// EXAMPLE INITAL STATE
// {
//   "value": 30,
//   "left": {
//       "value": 15,
//       "left": {
//           "value": 7,
//           "left": {
//               "value": 3,
//               "left": null,
//               "right": null
//           },
//           "right": {
//               "value": 7,
//               "left": null,
//               "right": null
//           }
//       },
//       "right": {
//           "value": 25,
//           "left": {
//               "value": 22,
//               "left": null,
//               "right": null
//           },
//           "right": null
//       }
//   },
//   "right": {
//       "value": 45,
//       "left": {
//           "value": 37,
//           "left": {
//               "value": 34,
//               "left": null,
//               "right": null
//           },
//           "right": {
//               "value": 42,
//               "left": null,
//               "right": null
//           }
//       },
//       "right": {
//           "value": 55,
//           "left": {
//               "value": 50,
//               "left": null,
//               "right": null
//           },
//           "right": {
//               "value": 63,
//               "left": null,
//               "right": null
//           }
//       }
//   }
// }

export default function DisplayTree(props) {

    /// PROPS ///
    const { breadth_first_trav_array } = props;

    // HELPER FUNCTIONS
    function draw_tree(arrayIn){
        
    }

    /// Display nothing if data hasnt loaded
    if (!breadth_first_trav_array){
        return null
    }

    return (
        <div className="output__container">
            <h1>{breadth_first_trav_array.slice(0,1)}</h1>
            <h1>{breadth_first_trav_array.slice(1,3)}</h1>
            <h1>{breadth_first_trav_array.slice(4,8)}</h1>
        </div>
    )
}
