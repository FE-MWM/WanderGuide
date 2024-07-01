import { useModal } from "../../context/ModalContext";

const StopoverFlight = () => {
  const { closeModal } = useModal();

  return (
    <form className="w-[450px]">
      <div className="mt-[10px] ml-[40px] mr-[40px]">
        <label className="flex items-center mb-5 gap-5 justify-between ">
          <span className="font-bold text-base w-[80px]">출국 일시</span>
          <div className="flex-1 flex flex-col ">
            <input
              aria-label="date"
              type="date"
              className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0"
            />
            <input
              aria-label="time"
              type="time"
              className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
            />
          </div>
        </label>
        <label className="flex items-center mb-5 gap-5 justify-between ">
          <span className="font-bold text-base w-[80px]">항공사</span>
          <input
            type="text"
            className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
            placeholder="항공사 (예: 대한항공, 에어부산)"
          />
        </label>
        <label className="flex items-center mb-5 gap-5 justify-between ">
          <span className="font-bold text-base w-[80px]">항공편</span>
          <input
            type="text"
            className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
            placeholder="항공편명 (예: KE1234)"
          />
        </label>
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
    </form>
  );
};

export default StopoverFlight;
