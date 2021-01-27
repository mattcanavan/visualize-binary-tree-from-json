import React from 'react';

/// STYLE ///
import './Output.css';

/// UTILS ///
import { build_array_for_each_level } from '../utils/buildArrayForEachLevel.js';

export default function Output(props) {

    /// LOCAL STATE ///
    const [levels, setLevels] = React.useState([
        [5],
        [7, 22],
        ['None', 'None', 17, 9],
    ]);

    /// PROPS ///
    const { BFTarray, JSONtree } = props;

    /// useEFFECT ///
    React.useEffect( () => {
        setLevels(build_array_for_each_level(BFTarray, JSONtree))
        console.log('levels', levels)
    }, [BFTarray, JSONtree])


    /// Display nothing if there's no BFTarray
    if (!BFTarray){
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
