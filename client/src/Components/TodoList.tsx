import styled from "styled-components";

import TodoItem from "./TodoItem";

interface ITodoList {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  test: ITodoList[];
  testData: () => void;
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = ({ test, testData }: TodoListProps) => {
  return (
    <TodoListBlock>
      {test.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
          testData={testData}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
