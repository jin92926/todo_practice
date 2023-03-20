import { ITodoList } from "Types/todo";
import { del, get, patch, post } from "Utils/api";

export const useTest = () => {
  const getTest = async () => {
    const data: ITodoList[] = await get("memo");
    return data;
  };

  const postTest = async ({
    id,
    text,
    done,
  }: Pick<ITodoList, "id" | "text" | "done">) => {
    const res = await post("memo", {
      id,
      text,
      done,
    });
    return res;
  };

  const patchTest = async ({ id, text }: Pick<ITodoList, "id" | "text">) => {
    const res = await patch(`memo/${id}`, {
      text,
    });
    return res;
  };

  const onTogle = async ({ id, done }: Pick<ITodoList, "id" | "done">) => {
    const res = await patch(`memo/${id}`, {
      done,
    });
    return res;
  };

  const delTest = async ({ id }: Pick<ITodoList, "id">) => {
    const res = await del(`memo/${id}`);
    return res;
  };

  return { getTest, delTest, postTest, patchTest, onTogle };
};
