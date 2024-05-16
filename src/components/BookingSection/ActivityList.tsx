import React from "react";
import ActivityItem from "./ActivityItem";
import { useModal } from "../../context/ModalContext";
import ActivityModal from "../ActivitySection/ActivityModal";
import { useRecoilValue } from "recoil";
import { Activities, activities } from "../../store/destinationAtom";
import NoWriteData from "../common/NoWriteData";

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
      {activityData.length > 0 ? (
        <div className="mb-[40px]">
          {activityData.map((data) => (
            <ActivityItem key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div
          className="w-full h-[119px] bg-white rounded-[25px] mt-[30px] cursor-pointer"
          onClick={() => addActivity()}
        >
          <NoWriteData title="액티비티/투어" />
        </div>
      )}
    </div>
  );
};

export default ActivityList;
