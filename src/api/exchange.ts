import axios from "axios";
import { getDate, getFridayIfWeekend } from "../Util/calcExchangeDate";

export const getExchangeList = async () => {
  const today = getDate().format("YYYY-MM-DD");
  const checkWeekend = getFridayIfWeekend(today).format("YYYY-MM-DD");
  try {
    const res = axios.get(
      `/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_API_EXCHANGE}&searchdate=${checkWeekend}&data=AP01`
      //`/site/program/financial/exchangeJSON?authkey=YWVgIoxXxKTI3HNUAZYsfsrV9XTB0WIf&searchdate=20240423&data=AP01`
    );
    const req = await res;
    //console.log("axios", req.data);
    return req.data;
  } catch (e) {
    return false;
  }
};
