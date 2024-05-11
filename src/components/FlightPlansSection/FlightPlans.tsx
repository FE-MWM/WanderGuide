import React from "react";

const FlightPlans = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold ">비행 일정</span>
        <button>
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="bg-white w-full h-[564px] rounded-3xl p-5"></div>
    </div>
  );
};

export default FlightPlans;
