import { ReactNode, useContext, useEffect } from "react";
import { selectDispatch, selectState } from "./SelectBox";
import ArrDown from "./ArrDown";

type SelectTrrigerProps = {
  children: ReactNode;
  layout?: string;
  linkedValue?: string;
};

const SelectTrriger = ({
  children,
  layout,
  linkedValue
}: SelectTrrigerProps) => {
  const { isOn, selected } = useContext(selectState);
  const { handleList, clearSelected } = useContext(selectDispatch);

  useEffect(() => {
    linkedValue && clearSelected();
  }, [linkedValue]);

  return (
    <div className={`relative ${layout || ""}`}>
      <label
        className={`flex flex-row justify-between items-center`}
        onClick={() => handleList(!isOn)}
      >
        <span>{selected.label || "선택"}</span>
        <ArrDown />
      </label>
      {isOn && children}
    </div>
  );
};

export default SelectTrriger;
