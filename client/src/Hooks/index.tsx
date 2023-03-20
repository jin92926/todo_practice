import { useRecoilState } from "recoil";
import { todoState } from "Store/todoStore";
import {
  OnTogleResponse,
  PatchTodoResponse,
  PostTodoResponse,
} from "Types/api";
import { ITodoList } from "Types/todo";
import { del, get, patch, post } from "Utils/api";

export const useTodo = () => {
  const [todo, setTodo] = useRecoilState(todoState); // recoil state 사용

  const getTodo = async () => {
    const data: ITodoList[] = await get("todo");
    return data;
  };

  const postTodo = async ({
    text,
    done,
    createAt,
  }: Pick<ITodoList, "text" | "done" | "createAt">) => {
    const res: PostTodoResponse = await post("todo", {
      text,
      done,
      createAt,
    });

    // todo 상태 업데이트
    // setTodo((prev): any => [...prev, res]);
    setTodo((prev): ITodoList[] => {
      const newTodo = {
        text: res.text,
        done: res.done,
        createAt: res.createAt,
        //! 연산자를 사용하여 res.id가 항상 존재함을 강제할 수도 있음, 만약 res.id가 undefined일 경우 에러
        id: res.id ?? 0,
      };
      return [...prev, newTodo];
    });
  };

  const patchTodo = async ({ id, text }: Pick<ITodoList, "id" | "text">) => {
    const res: PatchTodoResponse = await patch(`todo/${id}`, {
      id,
      text,
    });
    console.log(res);
    const updatedTodo = {
      id: res.id,
      text: res.text,
      done: res.done ?? false,
      createAt: res.createAt ?? "",
    };

    // todo 상태 업데이트
    setTodo((prev): ITodoList[] =>
      prev.map((item) => {
        if (item.id === id) {
          return updatedTodo;
        }
        return item;
      }),
    );
  };

  const delTodo = async ({ id }: Pick<ITodoList, "id">) => {
    // 비동기 함수이기 때문에, await 키워드로 인해 return문 없어도 Promise를 반환
    await del(`todo/${id}`);

    // todo 상태 업데이트
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const onTogle = async ({ id, done }: Pick<ITodoList, "id" | "done">) => {
    const res: OnTogleResponse = await patch(`todo/${id}`, {
      id,
      done,
    });

    const updatedTodo = {
      id: res.id,
      text: res.text ?? "",
      done: res.done,
      createAt: res.createAt ?? "",
    };

    // todo 상태 업데이트
    setTodo((prev): ITodoList[] =>
      prev.map((item) => {
        if (item.id === id) {
          return updatedTodo;
        }
        return item;
      }),
    );
  };

  return {
    getTodo,
    postTodo,
    patchTodo,
    delTodo,
    onTogle,
  };
};
