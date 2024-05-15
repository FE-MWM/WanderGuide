import dayjs from "dayjs";
import "dayjs/locale/ko";

export const formatYear = (date: number): string => {
  return dayjs.unix(date).format("YYYY-MM-DD");
};

export const formatTime = (date: number): string => {
  return dayjs.unix(date).format("HH:mm");
};

export const formatDate = (date?: number): string => {
  return date
    ? dayjs.unix(date).format("YYYY-MM-DD HH:mm")
    : dayjs().format("YYYY-MM-DD HH:mm");
};

export const formatUtc = (date?: number | string): number => {
  return date ? dayjs(date).valueOf() : dayjs().valueOf();
};

export const formatDay = (date: string): string => {
  return dayjs(date).locale("ko").format("ddd");
};

export const formatMonthDay = (date: string): string => {
  return dayjs(date).format("MM/DD");
};
