import React from "react";

const CurrentTime = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[46px] flex items-center">
        <span className="text-lg font-bold ">현재 시각</span>
        <span className="text-sm m-2">시차: +10시간</span>
      </div>
      <div className="bg-white w-full h-[calc(100%-46px)]"></div>
    </div>
  );
};

export default CurrentTime;
