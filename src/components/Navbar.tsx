import React from "react";
import AddTravelDestination from "./AddTravelDestination";
import { useModal } from "../context/ModalContext";

const Navbar = () => {
  const { openModal } = useModal();

  const addTrip = () => {
    openModal("여행지 추가", <AddTravelDestination />, onSubmit);
  };

  const onSubmit = () => {
    console.log(
      "확인을 누르면 실행됩니다. 여기서 처리할 로직 작성 하면됩니다."
    );
  };

  // UI를 확인 위한 임시조건 (추후 조건설정 UI 변경 )
  const active = true;

  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-2 flex items-center justify-center  border-gray-200">
        <img className="w-[40px] h-[40px]" src="/images/logo.svg" alt="logo" />
        <img className="pl-1.5" src="/images/wander-guide.svg" alt="logo" />
      </div>
      <div className="w-full h-[calc(100%-57px)] flex flex-col justify-between items-center">
        <div className="w-full mt-[20px]">
          {/* 여행지 입력 데이터 받은 후 리스트 UI 영역 , 현재는 active로 분기처리 했으나 작업하시는 분이 편한 조건으로 변경하시면 될것같습니다  */}
          <div
            className={`flex items-center px-4 mb-[20px] ${active ? " border-l-blue-500 border-l-4" : ""} cursor-pointer`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={`${active ? "/images/plane-blue.svg" : "/images/plane-black.svg"}`}
              alt="plane"
            />
            <span
              className={`line-clamp-1 ${active ? "text-blue-600 font-bold" : "text-cool-gray"} hover:font-bold`}
            >
              글자가 긴 여행은 어떻게 입력 되는지
            </span>
          </div>
        </div>
        <div
          className="w-full h-[80px] flex items-center justify-center border-t border-gray-200 cursor-pointer"
          onClick={() => addTrip()}
        >
          <img src="/images/add-button.svg" alt="logo" />
          <span className="pl-2 text-lg">여행지 추가</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
