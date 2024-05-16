import React from "react";
import { useModal } from "../context/ModalContext";
import AddTravelDestinationProvider from "../provider/AddTravelDestinationProvider";
import { PlanListData, planList } from "../store/planListAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { deleteData, getStoreData } from "../indexeddb/indexedDB";
import { DestinationData, destinationData } from "../store/destinationAtom";
import { useTab } from "../context/TabContext";
import { initData } from "../store/initAtom";

const Navbar = () => {
  const { openModal, closeModal } = useModal();
  const { setActiveTab } = useTab();
  const [list, setList] = useRecoilState<PlanListData[]>(planList);
  const setDestination = useSetRecoilState<DestinationData>(destinationData);
  const init = useRecoilValue<DestinationData>(initData);
  const addTrip = () => {
    openModal(
      "여행지 추가",
      <AddTravelDestinationProvider
        onCloseModal={closeModal}
        isUpdate={false}
      />
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

  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: PlanListData
  ) => {
    event.stopPropagation();

    await deleteData(item.id);
    const getPlans = await getStoreData();

    if (!getPlans.length) {
      setList([]);
      setDestination(init);
      return;
    }

    if (item.isActive) {
      const newPlans = list
        .filter((plan) => plan.id !== item.id)
        .map((item, idx) => {
          if (idx === 0) {
            return { ...item, isActive: true };
          } else {
            return { ...item, isActive: false };
          }
        });
      setList(newPlans);
      setDestination(getPlans[0]);
    } else {
      const filterPlanList = list.filter((plan) => plan.id !== item.id);
      setList(filterPlanList);
    }
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
                  className={`flex items-center justify-between px-4 mb-[20px] ${item.isActive ? " border-l-blue-500 border-l-4" : ""} cursor-pointer`}
                  onClick={() => {
                    handlePlanSelection(item.id);
                    setActiveTab("main");
                  }}
                >
                  <div className="flex items-center">
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
                  <div
                    className="flex items-center"
                    onClick={(event) => handleDelete(event, item)}
                  >
                    <img
                      className="w-[22px] h-[22px]"
                      src="/images/delete.svg"
                      alt="delete"
                    />
                  </div>
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
