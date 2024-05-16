import { ReactNode } from "react";

type SelectListProps = {
  children: ReactNode;
  bgColor?: string;
  layout?: string;
};

const SelectList = ({
  children,
  bgColor = "bg-white",
  layout = ""
}: SelectListProps) => {
  return (
    <div
      className={`w-full p-[10px] border flex flex-col absolute top-[110%] left-0 z-[2] ${bgColor} ${layout} rounded-[4px]`}
    >
      {children}
    </div>
  );
};

export default SelectList;
