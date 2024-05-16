import axios from "axios";

export const getExchangeList = async (date: string) => {
  try {
    const res = axios.get(
      `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_API_EXCHANGE}&searchdate=${date}&data=AP01`
    );
    const req = await res;
    return req.data;
  } catch (e) {
    return false;
  }
};
