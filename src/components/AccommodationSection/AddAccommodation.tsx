import { useModal } from "../../context/ModalContext";

type PropsData = {
  onSave: () => void;
};

const AddAccommodation = ({ onSave }: PropsData) => {
  const { closeModal } = useModal();

  return (
    <>
      <div className="w-[550px] p-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px]">날짜</span>
          <div className="flex justify-center items-center">
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            <span className="px-6">~</span>
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px]">숙소명</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px] mb-2">메모</span>
          <textarea className="mt-1 p-2 w-full border border-gray-300 rounded-md h-[200px]" />
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
          onClick={onSave}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default AddAccommodation;
