import { ITodoList } from "Types/todo";
import { del, get, patch, post } from "Utils/api";

export const useTodo = () => {
  const getTodo = async () => {
    const data: [ITodoList] = await get("memo");
    return data;
  };

  const postTodo = async ({ id, text, done }: any) => {
    const res: any = await post("memo", {
      id,
      text,
      done,
    });
    return res;
  };

  const patchTodo = async ({ id, text }: any) => {
    const res: any = await patch(`memo/${id}`, {
      text,
    });
    return res;
  };

  const delTodo = async ({ id }: any) => {
    const res: any = await del(`memo/${id}`);
    return res;
  };

  const onTogle = async ({ id, done }: any) => {
    const res: any = await patch(`memo/${id}`, {
      done,
    });
    return res;
  };

  return { getTodo, postTodo, patchTodo, delTodo, onTogle };
};
