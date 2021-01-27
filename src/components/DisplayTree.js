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

    // LOCAL STATE
    const [levels, setLevels] = React.useState();

    /// PROPS ///
    const { breadth_first_trav_array, finishedTree } = props;

    /// HELPER FUNCTIONS ///
    //measure height of tree
    function measure_height(tree){

        if (tree === null){
            return 0
        }

        let left_height = measure_height(tree.left);
        let right_height = measure_height(tree.right);

        let results = Math.max(left_height, right_height)

        return results + 1
    }

    //draw tree (pyramid)
    function draw_tree(arrayIn, tree){

        // for each row, how many nodes are possible
        const row_and_nodes = {
            // row: nodes
            0: 1,
            1: 2,
            2: 4,
            3: 8,
            4: 16,
            5: 32,
        }

        // how can i avoid doing this?
        if (tree === undefined) {
            return null
        }

        // first, measure tree height w/given function
        let lh = measure_height(tree.left);
        let rh = measure_height(tree.right);
        const max_height = Math.max(lh, rh);

        // now, we know how many levels to make
        const results = [];
        for (let i = 0; i <= max_height; i++){

            // calc slicing indices
            let start = row_and_nodes[i] - 1;
            let end = row_and_nodes[i + 1] - 1; //not inclusive

            // slice returns an array that acts as 1 level, store these levels in another array
            results.push(arrayIn.slice(start, end))
        }
        return results
    }

    // useEFFECT
    React.useEffect( () => {
        setLevels(draw_tree(breadth_first_trav_array, finishedTree))
        console.log('levels', levels)
    }, [finishedTree])


    /// Display nothing if data hasnt loaded
    if (!breadth_first_trav_array){
        return null
    }

    return (
        <div className="output__container">
            <h1>OUTPUT</h1>
            <br/>
            <br/>
            <br/>
            {levels && levels.map((value, index) => {
                return <h2 key={index}>{value.join(`${'\xa0'.repeat(index)}`)}</h2>
            })}
        </div>
    )
}
