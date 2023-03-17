import AddIcon from "@mui/icons-material/Add";
import { useTodo } from "Hooks";
import React, { useState } from "react";
import styled from "styled-components";

interface ITodoCreateProps {
  dateString: (useDate: Date) => string;
  useDate: Date;
}

const TodoCreate = ({ useDate, dateString }: ITodoCreateProps) => {
  const { postTodo } = useTodo();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const onToggle = () => setOpen(!open);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = () => {
    const done = false; // 예시로 done을 false로 설정
    postTodo({ text: value, done, createAt: dateString(useDate) });
    setValue("");
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, Enter/ Add 버튼을 누르세요"
            />
            <button type="submit" onClick={handleSubmit}>
              Add
            </button>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle}>
        <AddIcon />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  display: flex;

  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  background-color: ${({ theme }) => theme.colors.background_color};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
