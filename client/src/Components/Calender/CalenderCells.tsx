import uuid from "react-uuid";
import styled from "styled-components";

const CalenderCells = ({ year, month, setDate, startDay }: any) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  function isLeapYear(year: any) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  return (
    <Body>
      {Array(days[month] + startDay)
        .fill(null)
        .map((_, index) => {
          const d = index - (startDay - 1);
          return (
            <Day
              key={uuid()}
              // isToday={d === today.getDate()}
              // isSelected={d === day}
              onClick={() => setDate(new Date(year, month, d))}
            >
              {d > 0 ? d : ""}
            </Day>
          );
        })}
    </Body>
  );
};

export default CalenderCells;

const Body = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
