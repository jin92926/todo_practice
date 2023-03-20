import CalenderCells from "Components/Calender/CalenderCells";
import CalenderDays from "Components/Calender/CalenderDays";
import CalenderHeader from "Components/Calender/CalenderHeader";
import Todo from "Pages/Todo/Todo";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ICalendarProps, ICalender } from "Types/calender";

const Calendar = ({
  dateString,
  date,
  setDate,
  openTodo,
  SetOpenTodo,
}: ICalendarProps) => {
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

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

  const ClickOpenTodo = ({ year, month, day }: ICalender) => {
    SetOpenTodo(true);
    setDate(new Date(year, month, day));
  };

  return (
    <Frame>
      <CalenderHeader setDate={setDate} year={year} month={month} day={day} />
      <CalenderDays />
      <CalenderCells
        year={year}
        month={month}
        day={day}
        startDay={startDay}
        ClickOpenTodo={ClickOpenTodo}
      />
      {openTodo === true ? (
        <Todo date={date} dateString={dateString} SetOpenTodo={SetOpenTodo} />
      ) : (
        ""
      )}
    </Frame>
  );
};

export default Calendar;

const Frame = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;
