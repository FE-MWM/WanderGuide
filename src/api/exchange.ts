import axios from "axios";

export const getExchangeList = async (date: string) => {
  try {
    const res = axios.get(
      // 웹배포용
      `/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_API_EXCHANGE}&searchdate=${date}&data=AP01`
      // 크롬익스텐션용
      // `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_API_EXCHANGE}&searchdate=${date}&data=AP01`
    );
    const req = await res;
    return req.data;
  } catch (e) {
    return false;
  }
};
