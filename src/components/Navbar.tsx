import React from "react";
import { useModal } from "../context/ModalContext";
import AddTravelDestinationProvider from "../provider/AddTravelDestinationProvider";
import { PlanListData, planList } from "../store/planListAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getStoreData } from "../indexeddb/indexedDB";
import { DestinationData, destinationData } from "../store/destinationAtom";

const Navbar = () => {
  const { openModal, closeModal } = useModal();
  const [list, setList] = useRecoilState<PlanListData[]>(planList);
  const setDestination = useSetRecoilState<DestinationData>(destinationData);

  const addTrip = () => {
    openModal(
      "여행지 추가",
      <AddTravelDestinationProvider onCloseModal={closeModal} />
    );
  };

  const handlePlanSelection = (idx: number) => {
    const updatedList = list.map((item) => {
      if (item.id === idx) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setList(updatedList);

    getStoreData().then((res) => {
      const selectedDestinationData = res.find((list) => list.id === idx);

      selectedDestinationData && setDestination(selectedDestinationData);
    });
  };

  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-2 flex items-center justify-center  border-gray-200">
        <img className="w-[40px] h-[40px]" src="/images/logo.svg" alt="logo" />
        <img className="pl-1.5" src="/images/wander-guide.svg" alt="logo" />
      </div>
      <div className="w-full h-[calc(100%-57px)] flex flex-col justify-between items-center">
        <div className="w-full mt-[20px] h-full">
          {list.length === 0 ? (
            <div className="text-cool-gray text-sm flex flex-col justify-center items-center flex-1 h-full">
              <span>여행 떠나시나요?</span>
              <span>여행지를 추가해주세요.</span>
            </div>
          ) : (
            list.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex items-center px-4 mb-[20px] ${item.isActive ? " border-l-blue-500 border-l-4" : ""} cursor-pointer`}
                  onClick={() => handlePlanSelection(item.id)}
                >
                  <img
                    className="w-[40px] h-[40px]"
                    src={`${item.isActive ? "/images/plane-blue.svg" : "/images/plane-black.svg"}`}
                    alt="plane"
                  />
                  <span
                    className={`line-clamp-1 ${item.isActive ? "text-blue-600 font-bold" : "text-cool-gray"} hover:font-bold`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })
          )}
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
