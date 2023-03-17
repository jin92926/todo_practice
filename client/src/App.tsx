import Footer from "Components/Layout/Footer/Footer";
import Header from "Components/Layout/Header/Header";
import { useTodo } from "Hooks";
import Calendar from "Pages/Calender/Calender";
import Main from "Pages/Main/Main";
import Todo from "Pages/Todo/Todo";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

const App = () => {
  const { getTodo } = useTodo();
  const [todo, setTodo] = useState<ITodoList[]>([]);
  const today = new Date();
  const [date, setDate] = useState(today);
  const [openTodo, SetOpenTodo] = useState(false);

  // async는 항상 promise를 반환, 반환값이 없으므로 void
  const getTodoList = async () => {
    const data = await getTodo();
    setTodo(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const dateString = (useDate: Date): string => {
    return useDate.toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Section>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/todo"
              element={
                <Todo
                  getTodoList={getTodoList}
                  todo={todo}
                  dateString={dateString}
                  SetOpenTodo={SetOpenTodo}
                />
              }
            />
            <Route
              path="/calendar"
              element={
                <Calendar
                  getTodoList={getTodoList}
                  todo={todo}
                  dateString={dateString}
                  date={date}
                  setDate={setDate}
                  openTodo={openTodo}
                  SetOpenTodo={SetOpenTodo}
                />
              }
            />
          </Routes>
        </Section>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;

// 하단 고정하는 법
const Container = styled.div`
  min-height: 100vh; /* viewport height */
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  flex: 1;
`;
