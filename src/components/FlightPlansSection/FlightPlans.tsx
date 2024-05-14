import { useSideModal } from "../../context/SideModalContext";
import FlightList from "./FlightList";
import { useModal } from "../../context/ModalContext";
import AddFlightPlanProvider from "../../provider/AddFlightPlanProvider";

const FlightPlans = () => {
  const { isOpen, openSideModal, closeSideModal } = useSideModal();
  const { openModal } = useModal();
  const showFlightPlan = () => {
    if (!isOpen) {
      openSideModal("비행 일정", <FlightList />, true);
    } else {
      closeSideModal();
    }
  };
  const addFlightPlan = () => {
    openModal(
      "비행 일정",
      <AddFlightPlanProvider prefixes={["departure", "return"]} />
    );
  };
  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">비행 일정</span>
        <button onClick={() => addFlightPlan()}>
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div
        className="bg-white w-full h-[642px] rounded-3xl p-5 cursor-pointer"
        onClick={() => showFlightPlan()}
      >
        <FlightList />
      </div>
    </div>
  );
};

export default FlightPlans;
