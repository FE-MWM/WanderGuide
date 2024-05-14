import { useQuery } from "@tanstack/react-query";
import { Country, CountryData, getCountries } from "../api/country";
import { useState } from "react";

export const useCountries = () => {
  const [value, setValue] = useState<CountryData[]>([]);
  const { data } = useQuery<Country>({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: Infinity
  });

  const search = (str: string) => {
    const searched = data?.data.filter(
      (ele) => str && ele.한글명.includes(str)
    );
    setValue(searched || []);
  };

  return { value, search };
};
