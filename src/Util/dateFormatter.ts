import dayjs from "dayjs";

export const formatYear = (date: number): string => {
  return dayjs.unix(date).format("YYYY-MM-DD");
};

export const formatTime = (date: number): string => {
  return dayjs.unix(date).format("HH:mm");
};

export const formatDay = (date: number): string => {
  return dayjs.unix(date).format("YYYY-MM-DD HH:mm");
};
