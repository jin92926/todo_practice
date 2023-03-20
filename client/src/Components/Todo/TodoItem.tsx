import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useTodo } from "Hooks";
import { useState } from "react";
import styled from "styled-components";
import { ITodoList } from "Types/todo";

const TodoItem = ({
  id,
  text,
  done,
}: Pick<ITodoList, "id" | "text" | "done">) => {
  const { patchTodo, onTogle, delTodo } = useTodo();
  const [content, setContent] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleEdit = async ({
    id,
    content,
  }: {
    id: number;
    content: string;
  }) => {
    await patchTodo({ id, text: content });
    setEditing(false);
    // getTodoList();
  };

  const handleChangeDone = async ({
    id,
    done,
  }: Pick<ITodoList, "id" | "done">) => {
    await onTogle({ id, done: !done });
    // getTodoList();
  };

  const handleDelete = async ({ id }: Pick<ITodoList, "id">) => {
    await delTodo({ id });
  };

  const handleClose = () => {
    setEditing(false);
    setContent(text);
  };

  return (
    <TodoItemBlock>
      <CheckCircle onClick={() => handleChangeDone({ id, done })}>
        {done && <DoneIcon />}
      </CheckCircle>
      {editing ? (
        <>
          <Input
            placeholder="내용을 수정해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Save onClick={() => handleEdit({ id, content })}>
            <SaveIcon />
            Save
          </Save>
          <Close onClick={handleClose}>
            <CloseIcon />
            Close
          </Close>
        </>
      ) : (
        <>
          <Text>{text}</Text>
          <Edit onClick={() => setEditing(true)}>
            <EditIcon />
            Fix
          </Edit>
          <Remove onClick={() => handleDelete({ id })}>
            <DeleteIcon />
            Delete
          </Remove>
        </>
      )}
    </TodoItemBlock>
  );
};

export default TodoItem;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #00e71f;
  }
  display: none;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: flex;
    }
    ${Edit} {
      display: flex;
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

const Input = styled.input`
  flex: 1;
  margin-right: 2rem;
  font-size: 21px;
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #daff08;
  }
`;
const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
