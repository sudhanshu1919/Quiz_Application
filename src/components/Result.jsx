import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
function Result() {
  function onRestart() {
    console.log("Hii");
  }

  return (
    <>
      <Container>
        <Title>Quiz Application</Title>
        <ResultBox>
          <ResultItem>
            <Label>Username</Label>
            <Value>Sudhanshu Gaikwad</Value>
          </ResultItem>
          <ResultItem>
            <Label>Total Quiz Points :</Label>
            <Value>50</Value>
          </ResultItem>
          <ResultItem>
            <Label>Total Questions :</Label>
            <Value>05</Value>
          </ResultItem>
          <ResultItem>
            <Label>Total Attempts :</Label>
            <Value>03</Value>
          </ResultItem>
          <ResultItem>
            <Label>Total Earn Points :</Label>
            <Value>30</Value>
          </ResultItem>
          <ResultItem>
            <Label>Quiz Result :</Label>
            <Value>Passed</Value>
          </ResultItem>
        </ResultBox>

        <Button>
          <Link className="btn" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </Button>
      </Container>

      <div>
        {/* This is a  result component*/}
        <ResultTable />
      </div>
    </>
  );
}

export default Result;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 20px;
`;

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 30px;
  border: 2px solid #00ff00;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const ResultBox = styled.div`
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  color: #ffffff;
  font-size: 1.2rem;
`;

const Value = styled.span`
  color: #00ff00;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 8px 20px;
  background-color: #04cc04;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: white;
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;
