import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
function Main() {
  const inputRef = useRef(null);
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>
        <div className="All_info">
          <ol>
            <li>
              For each multiple-choice question, tick the checkbox in front of
              your chosen answer.
            </li>
            <li>The last question requires you to write HTML and CSS code.</li>
            <li>Please rate our Web Designing class at the end of the exam.</li>
          </ol>
        </div>
        <div className="user_info">
          <form id="form">
            <input ref={inputRef} type="text" placeholder="Username*" />
          </form>

          <div className="start">
            <Link className="btn" to={"quiz"}>
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
