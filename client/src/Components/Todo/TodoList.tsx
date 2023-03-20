import TodoItem from "Components/Todo/TodoItem";
import styled from "styled-components";
import { ITodoList, TodoListProps } from "Types/todo";

const TodoList = ({ todolist }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todolist.length === 0 ? (
        <div>할 일을 입력해보세요!</div>
      ) : (
        todolist.map(
          ({ id, text, done }: Pick<ITodoList, "id" | "text" | "done">) => (
            <TodoItem key={id} id={id} text={text} done={done} />
          ),
        )
      )}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  max-height: 30rem;
`;
