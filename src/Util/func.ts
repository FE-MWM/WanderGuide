import dayjs from "dayjs";

export const dateToString = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return `${date}`;
  }
};

export const getDate = () => {
  const now = dayjs();
  if (now.hour() < 11) {
    // 지금이 오전 11시 이전이라면 어제 날짜를 반환합니다.
    return now.subtract(1, "day");
  } else {
    // 오전 11시 이후라면 오늘 날짜를 반환합니다.
    return now;
  }
};

export const getFridayIfWeekend = (inputDate: Date | string) => {
  const date = dayjs(inputDate);
  const dayOfWeek = date.day(); // 일요일=0, 월요일=1, ..., 토요일=6

  if (dayOfWeek === 0) {
    // 일요일인 경우
    // 이전 금요일로 설정
    return date.subtract(2, "day");
  } else if (dayOfWeek === 6) {
    // 토요일인 경우
    // 이전 금요일로 설정
    return date.subtract(1, "day");
  }
  // 주말이 아닌 경우 입력된 날짜를 그대로 반환
  return date;
};
