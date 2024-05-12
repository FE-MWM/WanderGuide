import { ReactNode, useContext } from "react";
import { selectDispatch, selectState } from "./SelectBox";
interface Props {
  children: ReactNode;
  title: string;
  titleStyle?: string;
  layout?: string;
  linkedValue?: string;
  debounceFunc?: (str: string) => void;
}

// 사이즈 width 2종류, 높이는 동일. 패딩 동일. 폰트 사이즈, 컬러 동일

const SelectInput = ({
  children,
  layout,
  title,
  titleStyle,
  debounceFunc
}: Props) => {
  const { isOn, selected } = useContext(selectState);
  const { handleList } = useContext(selectDispatch);

  //console.log("selected", selected.label);

  const debounce = (str: string) => {
    if (!debounceFunc) return;
    let timer: NodeJS.Timeout | null = null;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      debounceFunc(str);
    }, 300);
  };

  return (
    <div className="relative">
      <p className={`mb-[5px] ${titleStyle}`}>{title}</p>
      <input
        onInput={(e) => debounce(e.currentTarget.value.trim())}
        placeholder="나라를 입력해주세요"
        className={`w-full ${layout} border rounded py-[14px] px-[14px]`}
        onClick={() => {
          selected.label ? undefined : handleList(true);
        }}
        readOnly={selected.label ? true : false}
        defaultValue={selected.label || ""}
        key={selected.label}
      />
      <>{isOn && children}</>
    </div>
  );
};

export default SelectInput;
