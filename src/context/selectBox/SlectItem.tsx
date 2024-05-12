import { ReactNode, useContext } from "react";
import { selectDispatch } from "./SelectBox";

type SelectItemProps = {
  children: ReactNode;
  value: string;
  label: string;
  layout?: string;
  onClick?: () => void;
};

const SelectItem = ({
  children,
  label,
  value,
  layout,
  onClick
}: SelectItemProps) => {
  const { handleList, handleSelect } = useContext(selectDispatch);
  return (
    <div
      className={`cursor-pointer ${layout || ""}`}
      onClick={() => {
        onClick?.();
        handleSelect({ label: label, value: value });
        handleList(false);
      }}
    >
      {children}
    </div>
  );
};

export default SelectItem;
