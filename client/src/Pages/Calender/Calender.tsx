import CalenderCells from "Components/Calender/CalenderCells";
import CalenderDays from "Components/Calender/CalenderDays";
import CalenderHeader from "Components/Calender/CalenderHeader";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  console.log(date);
  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  return (
    <Frame>
      <CalenderHeader setDate={setDate} year={year} month={month} day={day} />
      <CalenderDays />
      <CalenderCells
        setDate={setDate}
        year={year}
        month={month}
        startDay={startDay}
      />
    </Frame>
  );
};

export default Calendar;

const Frame = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;
