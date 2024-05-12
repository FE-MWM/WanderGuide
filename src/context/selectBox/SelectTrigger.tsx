import { ReactNode, useContext, useEffect } from "react";
import { selectDispatch, selectState } from "./SelectBox";
import ArrDown from "./ArrDown";

interface Props {
  children: ReactNode;
  layout?: string;
  linkedValue?: string;
}

// 사이즈 width 2종류, 높이는 동일. 패딩 동일. 폰트 사이즈, 컬러 동일

const SelectTrriger = ({ children, layout, linkedValue }: Props) => {
  const { isOn, selected } = useContext(selectState);
  const { handleList, clearSelected } = useContext(selectDispatch);

  console.log("linkedValue", linkedValue);

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
      <>{isOn && children}</>
    </div>
  );
};

export default SelectTrriger;
