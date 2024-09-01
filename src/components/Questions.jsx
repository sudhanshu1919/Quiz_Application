import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../Database/data";

// Custom Hook

import { useFetchQuestion } from "../hooks/FetchQuestion";

function Questions() {
  const [checked, setChecked] = useState();
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];

  useEffect(() => {
    // console.log(data);
    // console.log(isLoading);
    console.log(apiData);
    // console.log(serverError);
  }, []); // Added empty dependency array to prevent infinite loop

  function onSelect() {
    console.log("Checked onChange Event..!");
  }

  return (
    <Container>
      {/* <Header>Quiz Application</Header> */}
      <QuestionWrapper>
        <QuestionTitle>1.{question.question}</QuestionTitle>
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
// display: flex;
// flex-direction: column;
// justify-content: center;
//   align-items: center;
const Container = styled.div`
  min-height: 100vh;
  background-color: #181818;
  line-height: 30px;
  padding: 20px;
`;

const Header = styled.h1`
  color: #00ff00;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 10px;
  width: 100%;
  max-width: 600px;
`;

const QuestionWrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
  margin-bottom: 15px;
  background-color: #282828;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const OptionInput = styled.input`
  margin-right: 15px;
`;

const OptionLabel = styled.label`
  font-size: 1.2rem;
  color: #ffffff;
  cursor: pointer;

  ${OptionInput}:checked + & {
    color: #00ff00;
  }
`;
