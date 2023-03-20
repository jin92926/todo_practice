import { ITodoList } from "Types/todo";
import { del, get, patch, post } from "Utils/api";

export const useTodo2 = () => {
  const getTodo2 = async () => {
    const data: ITodoList[] = await get("todo");
    return data;
  };

  const postTodo2 = async ({
    text,
    done,
    createAt,
  }: Pick<ITodoList, "text" | "done" | "createAt">) => {
    const res = await post("todo", {
      text,
      done,
      createAt,
    });
    return res;
  };

  const patchTodo2 = async ({ id, text }: Pick<ITodoList, "id" | "text">) => {
    const res = await patch(`todo/${id}`, {
      text,
    });
    return res;
  };

  const delTodo2 = async ({ id }: Pick<ITodoList, "id">) => {
    const res = await del(`todo/${id}`);
    return res;
  };

  const onTogle2 = async ({ id, done }: Pick<ITodoList, "id" | "done">) => {
    const res = await patch(`todo/${id}`, {
      done,
    });
    return res;
  };

  return {
    getTodo2,
    postTodo2,
    patchTodo2,
    delTodo2,
    onTogle2,
  };
};
