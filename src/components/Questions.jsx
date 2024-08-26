import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
    <Container>
      <QuestionWrapper>
        <QuestionTitle>{question.question}</QuestionTitle>
        <OptionsList key={question.id}>
          {question.options.map((q, i) => (
            <OptionItem key={i}>
              <OptionInput
                type="radio"
                value={true}
                name="options"
                id={`q${i}-options`}
                onChange={onSelect}
              />
              <OptionLabel htmlFor={`q${i}-options`}>{q}</OptionLabel>
            </OptionItem>
          ))}
        </OptionsList>
      </QuestionWrapper>
    </Container>
  );
}

export default Questions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const QuestionWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  background-color: #333; /* Adjust background color */
`;

const QuestionTitle = styled.h2`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 20px;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OptionItem = styled.li`
  margin-bottom: 10px;
`;

const OptionInput = styled.input`
  margin-right: 10px;
`;

const OptionLabel = styled.label`
  font-size: 1.2rem;
  color: #ffffff;
  cursor: pointer;

  ${OptionInput}:checked + & {
    color: #007bff;
  }
`;
