import React from "react";

export interface ICalender {
  year: number;
  month: number;
  day: number;
}

export interface ICalendarProps {
  dateString: (useDate: Date) => string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  openTodo: boolean;
  SetOpenTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CalenderHeaderProps extends ICalender {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface CalenderCellsProps extends ICalender {
  startDay: number;
  ClickOpenTodo: ({ year, month, day }: ICalender) => void;
}
