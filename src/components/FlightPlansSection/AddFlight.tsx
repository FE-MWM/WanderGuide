import { useRecoilValue } from "recoil";
import { useModal } from "../../context/ModalContext";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import AddFlightItem from "./AddFlightItem";

type Props = {
  onSave: () => void;
  onDelete: () => void;
};

const AddFlight = ({ onSave, onDelete }: Props) => {
  const planDate = useRecoilValue<DestinationData>(destinationData);
  const hasPlaneFlight = Object.keys(planDate.flight).length > 0;

  const { closeModal } = useModal();

  const deleteFlightPlan = () => {
    if (!hasPlaneFlight) {
      alert("삭제할 항목이 없습니다.");
      return;
    }

    if (confirm("정말 삭제하시겠습니까?")) {
      onDelete();
      closeModal();
    }
  };

  return (
    <form className="relative">
      <button
        type="button"
        className="absolute top-[-50px] right-[20px] cursor-pointer"
        onClick={() => deleteFlightPlan()}
      >
        <img
          src="/images/delete.svg"
          alt="delete"
          className="w-[30px] h-[30px] "
        />
      </button>
      <div className="grid grid-cols-2 p-5 w-[800px]">
        <div className="flex flex-col border-r border-gray-200 p-6">
          <span className="text-sm font-bold mb-[20px] inline-block rounded-full border-cool-gray-200 border w-[60px] text-center p-1">
            출국
          </span>
          <AddFlightItem prefix="departure" />
        </div>
        <div className="flex flex-col p-6">
          <span className="text-sm font-bold mb-[20px] inline-block rounded-full border-cool-gray-200 border w-[60px] text-center p-1">
            귀국
          </span>
          <AddFlightItem prefix="return" />
        </div>
      </div>
      <div className="flex items-center justify-end px-6 py-3 border-t border-gray-200 gap-2">
        <button
          type="button"
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={onSave}
        >
          확인
        </button>
      </div>
    </form>
  );
};

export default AddFlight;
