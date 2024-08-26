import React from "react";
import "../styles/Main.css";
import Questions from "./Questions";
function Quiz() {
  // Next Button Event Handler
  function onNext() {
    console.log("next");
  }

  // prev Button Event Handler

  function onPrev() {
    console.log("prev");
  }
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* Display Questions */}

        <Questions />

        <div className="grid">
          <div>
            <button className="prev" onClick={onPrev}>
              {" "}
              ← Prev
            </button>
          </div>
          <div>
            <button className="next" onClick={onNext}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
