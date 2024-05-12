import axios from "axios";

export type Data = {
  "ISO alpha2": string;
  "ISO alpha3": string;
  "ISO numeric": number;
  "대륙명_공통 대륙코드": string;
  대륙명_행정표준코드: string;
  "대륙명_외교부 직제": string;
  영문명: string;
  한글명: string;
};

export type Country = {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: Data[];
};

export const getCountries = async <T = Country[]>(): Promise<T> => {
  const API_URL = `https://api.odcloud.kr/api/15091117/v1/uddi:bbcc2939-88e0-4a54-af03-ab819b4130e6?perPage=196&serviceKey=${process.env.REACT_APP_API_COUNTRY}`;
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw Error("나라 정보를 불러오는데 실패했습니다.");
  }
};
