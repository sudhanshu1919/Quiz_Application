import React from "react";
import styled from "styled-components";
function ResultTable() {
  return (
    <>
      <div className="container">
        <h4 className="text-center">Result </h4>
        <StyledTable className="table table-bordered text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Attemps</th>
              <th scope="col">Earn Points</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sudhanshu Gaikwad</td>
              <td>01</td>
              <td>10</td>
              <td>Passed</td>
            </tr>
          </tbody>
        </StyledTable>
      </div>
    </>
  );
}

const StyledTable = styled.table`
  width: 70%;
  margin-bottom: 2rem;
  background-color: transparent;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid #dee2e6; /* Applies border to all table cells */
    color: white; /* Ensures text color is white */
  }

  thead {
    background-color: #f8f9fa;
    color: black; /* Ensures text in the header is black for better contrast */
  }

  th {
    font-weight: bold;
  }

  tbody tr {
    background-color: #343a40; /* Background color for table rows (optional) */
  }

  @media (max-width: 768px) {
    width: 100%; /* Ensures the table is fully responsive on smaller screens */
    th,
    td {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 0.75rem;
    }
    th {
      text-align: right;
      position: relative;
      padding-right: 50%;
    }
    th::before {
      content: attr(scope);
      position: absolute;
      left: 0;
      width: 45%;
      padding-right: 0.5rem;
      white-space: nowrap;
      text-align: left;
      font-weight: normal;
    }
  }
`;
export default ResultTable;
