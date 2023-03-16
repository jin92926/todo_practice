import styled from "styled-components";

const CalenderDays = () => {
  const DAYS_OF_THE_WEEK = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  const days: any = DAYS_OF_THE_WEEK.map((day) => {
    return <Day key={day}>{day}</Day>;
  });
  return <Week>{days}</Week>;
};

export default CalenderDays;

const Week = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
