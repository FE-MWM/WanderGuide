export const toNumberCash = (cash: string) => {
  const stringCash = cash.split(".")[0].replaceAll(",", "");
  const numberCash = Number(stringCash);
  return numberCash;
};
