import { AxiosError } from "axios";
import { getExchangeList } from "../api/exchange";
import { useQuery } from "@tanstack/react-query";

type Cash = {
  result: number;
  cur_unit: string;
  ttb: string;
  tts: string;
  deal_bas_r: string;
  bkpr: string;
  yy_efee_r: string;
  ten_dd_efee_r: string;
  kftc_bkpr: "1";
  kftc_deal_bas_r: string;
  cur_nm: string;
};

type CashData = Cash[];

export const useGetExchangeRate = (kor: string) => {
  //리액트 쿼리로 해당 환율목록 가져오기
  const { data: cashData } = useQuery<
    CashData,
    AxiosError,
    { krw: string; exc: string }
  >({
    queryKey: [`test2`],
    queryFn: () => getExchangeList(),
    throwOnError: false,
    select: (res) => {
      const exchange = res.find((ele) => {
        return ele.cur_nm.split(" ")[0] === kor;
      });

      return {
        krw: exchange ? exchange.bkpr : "",
        exc: exchange ? exchange.cur_nm.split(" ")[1] : ""
      };
    }
  });

  //가져온 환율 목록 중 여행할 나라 환율 추출

  return { cashData };
};
