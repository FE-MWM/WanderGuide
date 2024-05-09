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

  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-2 flex items-center justify-center border-b border-gray-200">
        <img className="w-[40px] h-[40px]" src="/images/logo.svg" alt="logo" />
        <img className="pl-1.5" src="/images/wander-guide.svg" alt="logo" />
      </div>
      <div className="w-full h-[calc(100%-57px)] flex flex-col justify-between items-center">
        <div className="w-full">여행지 영역</div>
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
