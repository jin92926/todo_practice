import TodoHeader from "Components/Layout/Header/TodoHeader";
import TodoCreate from "Components/TodoCreate";
import TodoList from "Components/TodoList";
import { useTest } from "Hooks/test";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ITodoList {
  id: number;
  text: string;
  done: boolean;
}

const Todo = () => {
  const { getTest, delTest, postTest, patchTest } = useTest();
  const [test, setTest] = useState<ITodoList[]>([]);
  const [lastId, setLastId] = useState<number>(0);

  const testData = async () => {
    const data = await getTest();
    const maxId = data.reduce(
      (acc: any, item: any) => Math.max(acc, item.id),
      0,
    ); // list에서 가장 큰 id값 구하기
    setLastId(maxId); // 마지막 생성된 id값으로 설정하기
    setTest(data);
  };

  useEffect(() => {
    testData();
  }, []);

  const doneList = test.map((item) => item.done);
  return (
    <TodoTemplateBlock>
      <TodoHeader done={doneList} />
      <TodoList test={test} testData={testData} />
      <TodoCreate />
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
  position: relative;
`;
