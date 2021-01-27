import React from 'react';

// STYLES
import './InputForm.css';

// INITAL VALUES
const example = `
## json 

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
    const { userInput, setUserInput } = props

    return (
      <div className="container">
        <form>
          <label>
            <h1>USER INPUT</h1>
          </label>

          {/* TEXT AREA / USER INPUT */}
          <textarea
            className="field"
            name="textarea"
            type="textarea"
            // value={JSON.stringify(userInput.userInput, null, 4)}
            placeholder={example}
            onChange={(e) => {
                setUserInput({ ...userInput, userInput: JSON.parse(e.target.value) })
            }}
          />
        </form>
      </div>
    );
}


