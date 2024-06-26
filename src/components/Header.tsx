import React from "react";
import { useRecoilValue } from "recoil";
import { PlanListData, activePlan } from "../store/planListAtom";
import { useModal } from "../context/ModalContext";
import AddTravelDestinationProvider from "../provider/AddTravelDestinationProvider";

const MainHeader = () => {
  const { openModal, closeModal } = useModal();
  const item = useRecoilValue<PlanListData | undefined>(activePlan);

  const updateTrip = () => {
    openModal(
      "여행지 수정",
      <AddTravelDestinationProvider onCloseModal={closeModal} isUpdate={true} />
    );
  };

  return (
    <div className="bg-white h-[57px] border-b border-gray-200 flex items-center justify-between">
      <div className="pl-2 font-semibold text-xl">
        <span className="ml-8 font-bold">{item?.title ?? ""}</span>
      </div>
      <div className="flex items-center">
        <button
          className="w-[34px] h-[34px] bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100"
          onClick={() => updateTrip()}
        >
          <img
            className="w-[20px] h-[20px]"
            src="/images/settings.svg"
            alt="logo"
          />
        </button>
        <button className="w-[34px] h-[34px] bg-blue-50 rounded-full flex items-center justify-center m-3 hover:bg-blue-100">
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
