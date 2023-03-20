import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import uuid from "react-uuid";
import { useRecoilState } from "recoil";
import { todoState } from "Store/todoStore";
import styled from "styled-components";
import { CalenderCellsProps } from "Types/calender";

const CalenderCells = ({
  year,
  month,
  startDay,
  ClickOpenTodo,
}: CalenderCellsProps) => {
  const [todo, setTodo] = useRecoilState(todoState);
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  return (
    <Body>
      {Array(days[month] + startDay)
        .fill(null)
        .map((_, index) => {
          const day = index - (startDay - 1);
          const getDay = day > 0 ? `${year}년 ${month + 1}월 ${day}일` : "";

          const todolist = todo.filter(({ createAt }) => getDay === createAt);
          const done = todolist.filter(({ done }) => done === true).length;
          const undone = todolist.filter(({ done }) => done === false).length;

          return (
            <Day
              key={uuid()}
              // isToday={d === today.getDate()}
              // isSelected={d === day}
              onClick={() => ClickOpenTodo({ year, month, day })}
            >
              {day > 0 ? (
                <>
                  {day}
                  {todolist.length !== 0 ? (
                    <>
                      <Done>
                        <CheckCircleOutlineIcon />: {done}개
                      </Done>
                      <NotDone>
                        <PanoramaFishEyeIcon />: {undone}개
                      </NotDone>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const Done = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

const NotDone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;
