import TodoHeader from "Components/Layout/Header/TodoHeader";
import TodoCreate from "Components/Todo/TodoCreate";
import TodoList from "Components/Todo/TodoList";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

interface IDate {
  date?: Date;
  todo: ITodoList[];
  getTodoList: () => Promise<void>;
  dateString: any;
  SetOpenTodo: any;
}

const Todo = ({ date, todo, getTodoList, dateString, SetOpenTodo }: IDate) => {
  const today = new Date();
  const location = useLocation();
  const path = location.pathname;
  const useDate = path === "/calendar" ? date ?? today : today;

  const todolist = todo.filter(
    ({ createAt }) => dateString(useDate) === createAt,
  );
  const doneList = todolist.map((el) => el.done);

  return (
    <Container>
      <Background />
      <ModalBlock>
        <TodoHeader
          doneList={doneList}
          dateString={dateString}
          useDate={useDate}
          today={today}
          path={path}
          SetOpenTodo={SetOpenTodo}
        />
        <TodoList todolist={todolist} getTodoList={getTodoList} />
        <TodoCreate useDate={useDate} dateString={dateString} />
      </ModalBlock>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(5px);
  animation: modal-bg-show 0.5s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 12rem;
  border-radius: 10px;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.background_color};
  width: 60rem;
  max-height: 50rem;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  /* animation: modal-show 1s; */
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  border: 1px solid lightgrey;
`;
