import SelectBox from "../context/selectBox/SelectBox";
import { CountryData } from "../api/country";
import { useCountries } from "../hook/useCountries";
import { useRecoilState } from "recoil";
import { DestinationData } from "../store/destinationAtom";
import { initData } from "../store/initAtom";

const CountriesSelectBox = () => {
  const { value, search } = useCountries();
  const dataRef = useRef<CountryData | undefined>();
  const [initValue, setInit] = useRecoilState<DestinationData>(initData);

  const setApiParams = (ele: CountryData) => {
    const data = {
      ...initValue,
      apiParams: { ...ele }
    };
    setInit(data);
  };

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
                onClick={() => {
                  setApiParams(ele);
                  dataRef.current = ele;
                }}
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
