export const toNumberCash = (cash: string) => {
  //금액에 붙은 소수점이나 콤마 모두 제거
  const stringCash = cash.split(".")[0].replaceAll(",", "");
  const numberCash = Number(stringCash);
  return numberCash;
};

export const calcCash = (cash: string, rate: number) => {
  const exchangeRate = toNumberCash(cash) * rate;

  //3자리 수 마다 콤마 추가하는 정규식 적용
  return exchangeRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
