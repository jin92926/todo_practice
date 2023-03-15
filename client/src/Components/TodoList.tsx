import TodoItem from "Components/TodoItem";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

interface TodoListProps {
  todo: ITodoList[];
  getTodoList: () => Promise<void>;
}

const TodoList = ({ todo, getTodoList }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todo.map(({ id, text, done }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          done={done}
          getTodoList={getTodoList}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
