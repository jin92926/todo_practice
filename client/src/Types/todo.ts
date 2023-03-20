import React from "react";

export interface ITodoList {
  id: number;
  text: string;
  done: boolean;
  createAt: string;
}

export interface IDate {
  date?: Date;
  dateString: (useDate: Date) => string;
  SetOpenTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITodoCreateProps {
  dateString: (useDate: Date) => string;
  useDate: Date;
}

export interface TodoListProps {
  todolist: ITodoList[];
}

export interface TodoHeaderProps {
  doneList: boolean[];
  dateString: (useDate: Date) => string;
  useDate: Date | undefined;
  today: Date;
  path: string;
  SetOpenTodo: React.Dispatch<React.SetStateAction<boolean>>;
}
