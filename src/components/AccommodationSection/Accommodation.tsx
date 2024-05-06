import React from "react";

const Accommodation = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[46px] flex items-center justify-between">
        <span className="text-lg font-bold ">숙소</span>
        <button>
          <img
            className="w-[20px] h-[20px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="bg-white w-full h-[calc(100%-46px)] rounded-xl"></div>
    </div>
  );
};

export default Accommodation;
