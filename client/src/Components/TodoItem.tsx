import DoneIcon from "@mui/icons-material/Done";
import { useTest } from "Hooks/test";
import React from "react";
import styled, { css } from "styled-components";

interface Ids {
  id: number;
  done: boolean;
  text: string;
  testData: () => void;
}

const TodoItem = ({ id, done, text, testData }: Ids) => {
  const { patchTest, onTogle } = useTest();

  const handleEdit = async (id: any, text: string) => {
    await patchTest({ id, text });
    // setEditingId("");
    testData();
  };

  const handleChangeDone = async ({ id, done }: any) => {
    await onTogle({ id, done: !done });
    testData();
  };

  return (
    <TodoItemBlock>
      <CheckCircle onClick={() => handleChangeDone({ id, done })}>
        {done && <DoneIcon />}
      </CheckCircle>
      <Text onClick={() => handleEdit(id, text)}>{text}</Text>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
`;
