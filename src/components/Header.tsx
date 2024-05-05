import React from "react";

const MainHeader = () => {
  return (
    <div className="bg-white h-[57px] border-b border-gray-200 flex items-center justify-between">
      <div className="pl-2">
        <span>도시이름</span>
      </div>
      <div className="flex items-center">
        <button className="w-[32px] h-[32px] bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100">
          <img
            className="w-[20px] h-[20px]"
            src="/images/settings.svg"
            alt="logo"
          />
        </button>
        <button className="w-[32px] h-[32px] bg-blue-50 rounded-full flex items-center justify-center m-3 hover:bg-blue-100">
          <img
            className="w-[20px] h-[20px]"
            src="/images/notification.svg"
            alt="notification"
          />
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
