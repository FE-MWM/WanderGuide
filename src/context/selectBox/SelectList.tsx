import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  layout?: string;
}

const SelectList = ({ children, bgColor = "bg-white", layout = "" }: Props) => {
  return (
    <div
      className={`w-full p-[10px] border flex flex-col absolute top-[110%] left-0 z-[2] ${bgColor} ${layout}`}

      // className={`w-full p-[10px] flex flex-col ${bgColor} ${layout}`}
    >
      <>{children}</>
    </div>
  );
};

export default SelectList;
