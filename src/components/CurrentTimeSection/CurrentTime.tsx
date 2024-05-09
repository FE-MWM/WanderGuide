import React from "react";

const CurrentTime = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[53px] flex items-center pb-5">
        <span className="text-[22px] font-semibold ">현재 시각</span>
        <span className="text-xs m-2">시차: +10시간</span>
      </div>
      <div className="bg-white w-full h-[calc(100%-53px)] rounded-3xl p-5"></div>
    </div>
  );
};

export default CurrentTime;
