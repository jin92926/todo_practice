import { del, get, patch, post } from "Utils/api";

export const useTest = () => {
  const getTest = async () => {
    const data: any = await get("memo");
    return data;
  };

  const postTest = async ({ id, text, done }: any) => {
    const res: any = await post("memo", {
      id,
      text,
      done,
    });
    return res;
  };

  const patchTest = async ({ id, text }: any) => {
    const res: any = await patch(`memo/${id}`, {
      text,
    });
    return res;
  };

  const onTogle = async ({ id, done }: any) => {
    const res: any = await patch(`memo/${id}`, {
      done,
    });
    return res;
  };

  const delTest = async ({ id }: any) => {
    const res: any = await del(`memo/${id}`);
    return res;
  };

  return { getTest, delTest, postTest, patchTest, onTogle };
};
