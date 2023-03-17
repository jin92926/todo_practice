import TodoHeader from "Components/Layout/Header/TodoHeader";
import TodoCreate from "Components/Todo/TodoCreate";
import TodoList from "Components/Todo/TodoList";
import { useTodo } from "Hooks";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

interface IDate {
  date?: Date;
}

const Todo = ({ date }: IDate) => {
  const { getTodo } = useTodo();
  const [todo, setTodo] = useState<ITodoList[]>([]);

  const today = new Date();
  const location = useLocation();
  const useDate = location.pathname === "/calendar" ? date ?? today : today;
  const dateString = (useDate: Date): string => {
    return useDate.toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // async는 항상 promise를 반환, 반환값이 없으므로 void
  const getTodoList = async () => {
    const data = await getTodo();
    setTodo(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const todolist = todo.filter(
    ({ createAt }) => dateString(useDate) === createAt,
  );
  const doneList = todolist.map((el) => el.done);

  return (
    <TodoTemplateBlock>
      <TodoHeader
        doneList={doneList}
        dateString={dateString}
        useDate={useDate}
        today={today}
      />
      <TodoList todolist={todolist} getTodoList={getTodoList} />
      <TodoCreate useDate={useDate} dateString={dateString} />
    </TodoTemplateBlock>
  );
};

export default Todo;

const TodoTemplateBlock = styled.div`
  width: 70vh;
  height: 70vh;
  position: relative;
  border: 2px solid rgb(202, 200, 200);
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;
