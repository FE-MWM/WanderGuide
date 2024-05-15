import React from "react";
import ActivityItem from "./ActivityItem";
import { useModal } from "../../context/ModalContext";
import ActivityModal from "../ActivitySection/ActivityModal";
import { useRecoilValue } from "recoil";
import { Activities, activities } from "../../store/destinationAtom";

const ActivityList = () => {
  const { openModal } = useModal();
  const activityData = useRecoilValue<Activities[]>(activities);
  const addActivity = () => {
    openModal("액티비티/투어", <ActivityModal />);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold">액티비티/투어</span>
        <button type="button" aria-label="write" onClick={() => addActivity()}>
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="mb-[40px]">
        {activityData.map((data) => (
          <ActivityItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
