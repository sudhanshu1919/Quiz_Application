import React, { useState } from "react";
import "../styles/Main.css";
function Questions() {
  const [checked, setChecked] = useState();
  function onSlect() {
    console.log("Checked onChange Event..!");
  }
  return (
    <>
      <div className="questions">
        <h2 className="text-light">Simple Question</h2>
        <ul>
          <li>
            <input
              type="radio"
              value={true}
              name="options"
              id="q1-option"
              onChange={onSlect}
            />
            <label className="text-primary" htmlFor="q1-option">
              Option
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Questions;
