import { useRecoilState } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import AccoBookItem from "./AccoBookItem";
import { useModal } from "../../context/ModalContext";
import AddAccommodationProvider from "../../provider/AddAccommodationProvider";
import { updateData } from "../../indexeddb/indexedDB";
import NoWriteData from "../common/NoWriteData";

const AccommodationList = () => {
  const { openModal, closeModal } = useModal();
  const [planData, setPlanData] =
    useRecoilState<DestinationData>(destinationData);
  const accommodations = planData.accommodation;

  const onModal = (idx?: number) => {
    const formData =
      typeof idx === "number"
        ? { formData: accommodations[idx], number: idx }
        : undefined;
    openModal("숙소", <AddAccommodationProvider data={formData} />);
  };

  const deleteItem = (idx: number) => {
    const newAccommodations = accommodations.filter(
      (ele, index) => idx !== index
    );
    const newData = {
      accommodation: newAccommodations
    };

    openModal(
      "삭제하시겠습니까?",
      <div className="w-[300px] flex items-center justify-end px-6 py-3 border-t border-gray-200 gap-2">
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
          onClick={() => {
            updateData(planData.id!, newData).then(() => {
              setPlanData({
                ...planData,
                ...newData
              });
              closeModal();
            });
          }}
        >
          확인
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold">숙소</span>
        <button
          type="button"
          aria-label="write"
          onClick={() => {
            onModal();
          }}
        >
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      {accommodations.length > 0 ? (
        <div className="mb-[40px]">
          {accommodations.map((ele, idx) => {
            return (
              <AccoBookItem
                key={idx}
                st={ele.startDate}
                end={ele.endDate}
                text={ele.text}
                accommodation={ele.title}
                onClick={() => onModal(idx)}
                deleteItem={() => deleteItem(idx)}
              />
            );
          })}
        </div>
      ) : (
        <div
          className="w-full h-[119px] bg-white rounded-[25px] mt-[30px] cursor-pointer"
          onClick={() => onModal()}
        >
          <NoWriteData title="숙소" />
        </div>
      )}
    </div>
  );
};

export default AccommodationList;
