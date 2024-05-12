import { useContext } from "react";
import { selectState } from "./SelectBox";

const ArrDown = () => {
  const { isOn } = useContext(selectState);
  return (
    <div className={`${isOn ? "rotate-180" : ""}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#C3C4C5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrDown;
