import React from "react";
import styled from "styled-components";
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
    <QuizContainer>
      <Title>Quiz Application</Title>

      {/* Display Questions */}
      <Questions />

      <ButtonGrid>
        <Button className="prev" onClick={onPrev}>
          ← Prev
        </Button>
        <Button className="next" onClick={onNext}>
          Next →
        </Button>
      </ButtonGrid>
    </QuizContainer>
  );
}

export default Quiz;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #181818;
  padding: 20px;
`;

const Title = styled.h1`
  color: #00ff00;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 10px;
  width: 100%;
  max-width: 600px;
`;

const ButtonGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
