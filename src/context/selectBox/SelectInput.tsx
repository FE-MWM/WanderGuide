import { ReactNode, useContext, useEffect } from "react";
import { selectDispatch, selectState } from "./SelectBox";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../../provider/AddTravelDestinationProvider";
type SelectInputProps = {
  children: ReactNode;
  title: string;
  titleStyle?: string;
  layout?: string;
  linkedValue?: string;
  debounceFunc?: (str: string) => void;
};

const SelectInput = ({
  children,
  layout,
  title,
  titleStyle,
  debounceFunc
}: SelectInputProps) => {
  const { isOn, selected } = useContext(selectState);
  const { handleList } = useContext(selectDispatch);
  const { register, setValue } = useFormContext<FormValues>();

  // console.log("selected", selected.label);

  const debounce = (str: string) => {
    console.log("de str", str);
    if (!debounceFunc) return;
    let timer: NodeJS.Timeout | null = null;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      debounceFunc(str);
    }, 300);
  };

  useEffect(() => {
    setValue("destination", selected.label);
  }, [selected]);

  return (
    <div className="relative">
      <p className={`mb-[5px] ${titleStyle}`}>{title}</p>
      <input
        onInput={(e) => debounce(e.currentTarget.value.trim())}
        placeholder="나라를 입력해주세요"
        className={`w-full ${layout} border rounded py-[14px] px-[14px]`}
        onClick={(e) => {
          e.currentTarget.value.trim() ? handleList(true) : handleList(!isOn);
        }}
        // readOnly={selected.label ? true : false}
        {...register("destination", { required: "destination is required" })}
        onBlur={(e) => {
          e.currentTarget.value.trim() ? handleList(true) : handleList(!isOn);
        }}
      />
      {isOn && children}
    </div>
  );
};

export default SelectInput;
