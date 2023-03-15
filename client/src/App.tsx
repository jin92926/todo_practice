import Footer from "Components/Layout/Footer/Footer";
import Header from "Components/Layout/Header/Header";
import Main from "Pages/Main/Main";
import Sample from "Pages/sample";
import Todo from "Pages/Todo/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Comment from "Test1/Comment";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Section>
          <Routes>
            <Route path="/sample" element={<Sample />} />
            <Route path="/" element={<Main />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/comment" element={<Comment />} />
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
