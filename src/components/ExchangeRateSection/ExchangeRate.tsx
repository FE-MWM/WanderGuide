import React from "react";

const ExchangeRate = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[46px] flex justify-between items-center">
        <div>
          <span className="text-lg font-bold pr-2">환율</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[20px]"
            src="/images/refresh.svg"
            alt="refresh"
          />
          <span className="text-sm pl-1">2024.04.20 19:30</span>
        </div>
      </div>
      <div className="bg-white w-full h-[calc(100%-46px)]"></div>
    </div>
  );
};

export default ExchangeRate;
