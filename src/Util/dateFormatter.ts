import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { getCountry } from "countries-and-timezones";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

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

export const fetchTimeForCountry = async (countryCode: string) => {
  const countryInfo = getCountry(countryCode);
  if (!countryInfo) {
    return;
  }
  const timezone = countryInfo.timezones[0];
  const currentTime = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
  return currentTime;
};

export const calculateTimeDifference = async (time1: string, time2: string) => {
  const format = "HH:mm:ss";

  const moment1 = dayjs(time1, format);
  const moment2 = dayjs(time2, format);

  const timeDiff = moment1.diff(moment2, "minutes");

  const diffDuration = dayjs.duration(timeDiff, "minutes").format("HH");
  return diffDuration;
};
