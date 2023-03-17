import React from "react";
import styled, { css } from "styled-components";
import { ICalender } from "Types/calender";

interface CalenderHeaderProps extends ICalender {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalenderHeader = ({ setDate, year, month, day }: CalenderHeaderProps) => {
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <Header>
      <Button onClick={() => setDate(new Date(year, month - 1, day))}>
        Prev
      </Button>
      <div>
        {MONTHS[month]} {year}
      </div>
      <Button onClick={() => setDate(new Date(year, month + 1, day))}>
        Next
      </Button>
    </Header>
  );
};

export default CalenderHeader;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const Button = styled.div`
  cursor: pointer;
`;
