import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const inputRef = useRef(null);

  return (
    <Container>
      <Title>Quiz Application</Title>

      <AllInfo>
        <ol>
          <li>
            For each multiple-choice question, tick the checkbox in front of
            your chosen answer.
          </li>
          <li>The last question requires you to write HTML and CSS code.</li>
          <li>Please rate our Web Designing class at the end of the exam.</li>
        </ol>
      </AllInfo>

      <UserInfo>
        <Form id="form">
          <Input ref={inputRef} type="text" placeholder="Username*" />
        </Form>

        <Start>
          <StyledLink to={"quiz"}>Start Quiz</StyledLink>
        </Start>
      </UserInfo>
    </Container>
  );
}

export default Main;

/* Styled Components */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AllInfo = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;

  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
    text-align: left;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #d1d1d1;
  }

  @media (max-width: 768px) {
    li {
      font-size: 1rem;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
  }
`;

const Start = styled.div`
  text-align: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 30%;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 1rem;
  }
`;
