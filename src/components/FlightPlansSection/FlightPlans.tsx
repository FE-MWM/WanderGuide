import { useSideModal } from "../../context/SideModalContext";
import FlightList from "./FlightList";
import { useModal } from "../../context/ModalContext";
import AddFlightPlanProvider from "../../provider/AddFlightPlanProvider";
import NoWriteData from "../common/NoWriteData";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import NoSettingData from "../common/NoSettingData";

const FlightPlans = () => {
  const { isOpen, openSideModal, closeSideModal } = useSideModal();
  const { openModal } = useModal();
  const planDate = useRecoilValue<DestinationData>(destinationData);
  const { flight } = planDate;
  const hasFlight = Object.keys(flight).length > 0;
  const hasPlan = planDate.planInfo.destination.length > 0;

  const showFlightPlan = () => {
    if (!isOpen) {
      openSideModal("비행 일정", <FlightList />, true);
    } else {
      closeSideModal();
    }
  };
  const addFlightPlan = () => {
    if (hasPlan) {
      openModal(
        "비행 일정",
        <AddFlightPlanProvider prefixes={["departure", "return"]} />
      );
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">비행 일정</span>
        {hasPlan && (
          <button onClick={() => addFlightPlan()}>
            <img
              className="w-[24px] h-[24px]"
              src="/images/write.svg"
              alt="write"
            />
          </button>
        )}
      </div>
      <div
        className="bg-white w-full h-[625px] rounded-3xl p-5 cursor-pointer"
        onClick={hasFlight ? showFlightPlan : addFlightPlan}
      >
        {hasFlight ? (
          <FlightList />
        ) : hasPlan ? (
          <NoWriteData title="비행 일정" />
        ) : (
          <NoSettingData />
        )}
      </div>
    </div>
  );
};

export default FlightPlans;
