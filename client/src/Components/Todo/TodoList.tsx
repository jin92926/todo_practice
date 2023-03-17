import TodoItem from "Components/Todo/TodoItem";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

interface TodoListProps {
  todolist: ITodoList[];
  getTodoList: () => Promise<void>;
}

const TodoList = ({ todolist, getTodoList }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todolist.map(({ id, text, done }: any) => (
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
