import React from 'react';

/// STYLES ///
import './InputForm.css';

/// PLACEHOLDER VALUE ///
const example = `

PASTE JSON HERE...

EXAMPLE:

{
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
}
`;

export default function InputForm(props) {

    /// PROPS ///
    const { setUserInput } = props

    return (
      <div className="input__container">
        <form>
          <label>
            <h1>USER INPUT</h1>
          </label>

          {/* TEXT AREA / USER INPUT */}
          <textarea
            className="field"
            name="textarea"
            type="textarea"
            placeholder={example}
            onChange={(e) => {
                setUserInput({ userInput: e.target.value })
            }}
          />
        </form>
      </div>
    );
}


