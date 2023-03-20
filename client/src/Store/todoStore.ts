import { atom } from "recoil";
import { ITodoList } from "Types/todo";

export const todoState = atom<ITodoList[]>({
  key: "todoState",
  default: [],
});
