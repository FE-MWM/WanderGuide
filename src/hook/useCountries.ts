import { useQuery } from "@tanstack/react-query";
import { Country, CountryData, getCountries } from "../api/country";
import { useEffect, useState } from "react";

export const useCountries = () => {
  const [value, setValue] = useState<CountryData[]>([]);
  const { data } = useQuery<Country>({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: Infinity
  });

  const search = (str: string) => {
    const searched = data?.data.filter((ele) => ele.한글명.includes(str));
    setValue(searched || []);
  };

  useEffect(() => {
    if (data) setValue(data.data);
  }, [data]);

  return { value, search };
};
