import { ITodoList } from "Types/todo";
import { del, get, patch, post } from "Utils/api";

export const useTodo = () => {
  const getTodo = async () => {
    const data: ITodoList[] = await get("todo");
    return data;
  };

  const postTodo = async ({
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

  const patchTodo = async ({ id, text }: Pick<ITodoList, "id" | "text">) => {
    const res = await patch(`todo/${id}`, {
      text,
    });
    return res;
  };

  const delTodo = async ({ id }: Pick<ITodoList, "id">) => {
    const res = await del(`todo/${id}`);
    return res;
  };

  const onTogle = async ({ id, done }: Pick<ITodoList, "id" | "done">) => {
    const res = await patch(`todo/${id}`, {
      done,
    });
    return res;
  };

  return {
    getTodo,
    postTodo,
    patchTodo,
    delTodo,
    onTogle,
  };
};
