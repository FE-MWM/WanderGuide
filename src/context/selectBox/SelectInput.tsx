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
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<FormValues>();

  const debounce = (str: string) => {
    if (!debounceFunc) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
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
        placeholder="나라를 선택해주세요"
        className={`w-full ${layout} border rounded py-[14px] px-[14px]`}
        onClick={(e) => {
          e.currentTarget.value.trim() ? handleList(true) : handleList(!isOn);
        }}
        {...register("destination", { required: "나라를 선택해주세요" })}
      />
      {isOn && children}
      {errors.destination && (
        <p className="text-xs text-red-700 pt-[3px]">
          {errors.destination.message}
        </p>
      )}
    </div>
  );
};

export default SelectInput;
