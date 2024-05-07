import React from "react";

const Activity = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold ">액티비티/투어</span>
        <button>
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="bg-white w-full h-[calc(100%-53px)] rounded-3xl"></div>
    </div>
  );
};

export default Activity;