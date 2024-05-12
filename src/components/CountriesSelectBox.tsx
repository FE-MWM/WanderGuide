import { useRef } from "react";
import SelectBox from "../context/selectBox/SelectBox";
import { Data } from "../api/country";
import { useCountries } from "../hook/useCountries";

const CountriesSelectBox = () => {
  const { value, search } = useCountries();
  const dataRef = useRef<Data | undefined>();

  return (
    <SelectBox>
      <SelectBox.input
        title="WHERE"
        titleStyle="text-modal1"
        debounceFunc={(str) => search(str)}
      >
        <SelectBox.list bgColor="bg-white" layout="h-[150px] overflow-y-auto">
          {value?.map((ele, idx) => {
            return (
              <SelectBox.item
                key={idx}
                value={`${ele["ISO numeric"]}`}
                label={ele.한글명}
                onClick={() => (dataRef.current = ele)}
              >
                {ele.한글명}
              </SelectBox.item>
            );
          })}
        </SelectBox.list>
      </SelectBox.input>
    </SelectBox>
  );
};

export default CountriesSelectBox;
