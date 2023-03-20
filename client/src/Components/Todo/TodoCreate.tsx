import AddIcon from "@mui/icons-material/Add";
import { useTodo } from "Hooks";
import React, { useState } from "react";
import styled from "styled-components";
import { ITodoCreateProps } from "Types/todo";

const TodoCreate = ({ useDate, dateString }: ITodoCreateProps) => {
  const { postTodo } = useTodo();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onToggle = () => setOpen(!open);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const done = false;
      postTodo({ text: trimmedValue, done, createAt: dateString(useDate) });
      setValue("");
      setErrorMessage("");
      setOpen(false);
    } else {
      setErrorMessage("할 일을 입력해주세요");
    }
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, Enter/ Add 버튼을 누르세요"
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <InputButton type="submit">Add</InputButton>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle}>
        <AddIcon />
      </CircleButton>
    </>
  );
};

export default TodoCreate;

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
  justify-content: space-between;
  align-items: center;
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
  width: 70%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const InputButton = styled.button`
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
`;
