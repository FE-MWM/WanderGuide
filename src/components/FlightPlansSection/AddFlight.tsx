import { useModal } from "../../context/ModalContext";
import AddFlightItem from "./AddFlightItem";

const AddFlight = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="grid grid-cols-2 p-5 w-[800px]">
        <div className="flex flex-col border-r border-gray-200 p-6">
          <span className="text-sm font-bold mb-[20px] inline-block rounded-full border-cool-gray-200 border w-[60px] text-center p-1">
            출국
          </span>
          <AddFlightItem />
        </div>
        <div className="flex flex-col p-6">
          <span className="text-sm font-bold mb-[20px] inline-block rounded-full border-cool-gray-200 border w-[60px] text-center p-1">
            귀국
          </span>
          <AddFlightItem />
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
        >
          확인
        </button>
      </div>
    </>
  );
};

export default AddFlight;
