import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { TodoHeaderProps } from "Types/todo";

const TodoHeader = ({
  doneList,
  dateString,
  useDate,
  today,
  path,
  SetOpenTodo,
}: TodoHeaderProps) => {
  const undoneTasks = doneList.filter((val) => val === false);
  const dayName = useDate?.toLocaleString("ko-KR", { weekday: "long" });

  const handleClose = () => {
    SetOpenTodo(false);
  };

  return (
    <TodoHeadBlock>
      <Title>
        <h1>{dateString(useDate ?? today)}</h1>
        {path === "/todo" ? (
          ""
        ) : (
          <Close onClick={handleClose}>
            <CloseIcon />
          </Close>
        )}
      </Title>
      <div className="day">{dayName}</div>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
    </TodoHeadBlock>
  );
};

export default TodoHeader;

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
  }
  .day {
    margin-top: 4px;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Close = styled.div`
  cursor: pointer;
`;
