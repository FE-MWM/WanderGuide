import React from "react";

const Navbar = () => {
  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-2 flex items-center border-b border-gray-200">
        <img className="w-[40px] h-[40px]" src="/images/logo.svg" alt="logo" />
        <div className="pl-1">WanderGuide</div>
      </div>
      <div className="w-full h-[calc(100%-57px)] flex flex-col justify-between items-center">
        <div className="w-full">여행지 영역</div>
        <div className="w-full h-[50px] flex items-center justify-center border-t border-gray-200">
          <img src="/images/add-button.svg" alt="logo" />
          <span className="pl-2">여행지 추가</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
