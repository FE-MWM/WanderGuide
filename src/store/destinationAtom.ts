import { atom, selector } from "recoil";
import { CountryData } from "../api/country";

export type PlanInfoData = {
  title: string;
  startDate: string;
  endDate: string;
  member: string;
  destination: string;
};

export type AccommodationData = {
  startDate: string;
  endDate: string;
  title: string;
  text: string;
};

export type Activities = {
  id: string;
  date: string;
  memo: string;
};

export type TransferFlight = {
  [key: string]: string | boolean;
};

export type DestinationData = {
  id?: number;
  planInfo: PlanInfoData;
  flight: {
    [key: string]: string | boolean;
  };
  departureTransfer: TransferFlight[];
  returnTransfer: TransferFlight[];
  accommodation: AccommodationData[];
  activities: Activities[];
  apiParams: CountryData;
};

export const destinationData = atom<DestinationData>({
  key: "destinationData",
  default: {
    planInfo: {
      title: "",
      startDate: "",
      endDate: "",
      member: "",
      destination: ""
    },
    flight: {},
    departureTransfer: [],
    returnTransfer: [],
    accommodation: [],
    activities: [],
    apiParams: {
      "ISO alpha2": "",
      "ISO alpha3": "",
      "ISO numeric": 0,
      "대륙명_공통 대륙코드": "",
      대륙명_행정표준코드: "",
      "대륙명_외교부 직제": "",
      영문명: "",
      한글명: ""
    }
  }
});

export const planInfo = selector({
  key: "planInfo",
  get: ({ get }) => {
    const data = get(destinationData);
    return data.planInfo;
  }
});

export const activities = selector({
  key: "activities",
  get: ({ get }) => {
    const data = get(destinationData);
    if (!data.activities) {
      return [];
    }

    const sortingActivities = [...data.activities].sort((a, b) => {
      const prevDate = new Date(a.date).getTime();
      const nextDate = new Date(b.date).getTime();
      return prevDate - nextDate;
    });
    return sortingActivities;
  }
});

export const apiParams = selector({
  key: "apiParams",
  get: ({ get }) => {
    const data = get(destinationData);
    return data.apiParams;
  }
});
