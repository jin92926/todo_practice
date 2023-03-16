import TodoHeader from "Components/Layout/Header/TodoHeader";
import TodoCreate from "Components/Todo/TodoCreate";
import TodoList from "Components/Todo/TodoList";
import { useTodo } from "Hooks";
import Calendar from "Pages/Calender/Calender";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

const Todo = () => {
  const { getTodo } = useTodo();
  const [todo, setTodo] = useState<ITodoList[]>([]);
  const [lastId, setLastId] = useState<number>(0);

  // async는 항상 promise를 반환, 반환값이 없으므로 void
  const getTodoList = async (): Promise<void> => {
    const data = await getTodo();
    const maxId = data.reduce(
      (acc: number, item: ITodoList) => Math.max(acc, item.id),
      0,
    ); // list에서 가장 큰 id값 구하기
    setLastId(maxId); // 마지막 생성된 id값으로 설정하기
    setTodo(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const doneList = todo.map((el) => el.done);

  return (
    <TodoTemplateBlock>
      <TodoHeader doneList={doneList} />
      <TodoList todo={todo} getTodoList={getTodoList} />
      <TodoCreate lastId={lastId} />
    </TodoTemplateBlock>
  );
};

export default Todo;

const Overlay = styled.div`
  background-color: rgba(165, 144, 144, 0.5);
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
`;

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
