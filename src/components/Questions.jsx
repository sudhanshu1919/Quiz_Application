import React, { useEffect, useState } from "react";
import "../styles/Main.css";

import data from "../Database/data";

function Questions() {
  const [checked, setChecked] = useState();

  const question = data[0];

  useEffect(() => {
    console.log(data);
  }, []); // Added empty dependency array to prevent infinite loop

  function onSelect() {
    console.log("Checked onChange Event..!");
  }

  return (
    <>
      <div className="questions">
        <h2 className="text-light">{question.question}</h2>

        <ul key={question.id}>
          {question.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={true}
                name="options"
                id={`q${i}-options`}
                onChange={onSelect}
              />
              <label className="text-primary" htmlFor={`q${i}-options`}>
                {q}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Questions;
