import styled from "styled-components";

interface TodoHeaderProps {
  done: boolean[];
}

const TodoHeader = ({ done }: TodoHeaderProps) => {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const undoneTasks = done.filter((val) => val === false);

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
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
