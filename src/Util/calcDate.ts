import dayjs from "dayjs";

export const getYear = (date: string) => dayjs(date).year();
export const getMonth = (date: string) => {
  const data = dayjs(date).month() + 1;
  if (data < 10) return `0${data}`;
  return data;
};
export const getDate = (date: string) => {
  const data = dayjs(date).date();
  if (data < 10) return `0${data}`;
  return data;
};
export const getDay = (date: string) => {
  const data = dayjs(date).day();
  switch (data) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    default:
      return "";
  }
};
export const getDiff = (item: { startDate: string; endDate: string }) => {
  const st = dayjs(item.startDate);
  const end = dayjs(item.endDate);
  const diff = end.diff(st, "day");

  return diff;
};
