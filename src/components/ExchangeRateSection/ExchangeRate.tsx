import React from "react";

const ExchangeRate = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex justify-between items-center pb-5">
        <div>
          <span className="text-[22px] font-semibold pr-2">환율</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[20px]"
            src="/images/refresh.svg"
            alt="refresh"
          />
          <span className="text-xs pl-1">2024.04.20 19:30</span>
        </div>
      </div>
      <div className="bg-white w-full h-[83px] rounded-3xl p-5"></div>
    </div>
  );
};

export default ExchangeRate;
