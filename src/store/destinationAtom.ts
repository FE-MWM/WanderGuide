import { atom, selector } from "recoil";
import { CountryData } from "../api/country";

export type AccommodationData = {
  startDate: string;
  endDate: string;
  title: string;
  text: string;
};

export type Activities = {
  date: string;
  text: string;
};

export type DestinationData = {
  id?: number;
  planInfo: {
    title: string;
    startDate: string;
    endDate: string;
    member: string;
    destination: string;
  };
  flight: {
    [key: string]: string | boolean;
  };
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

export const apiParams = selector({
  key: "apiParams",
  get: ({ get }) => {
    const data = get(destinationData);
    return data.apiParams;
  }
});
