import { useRecoilState } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import AccoBookItem from "./AccoBookItem";
import { useModal } from "../../context/ModalContext";
import AddAccommodationProvider from "../../provider/AddAccommodationProvider";
import { updateData } from "../../indexeddb/indexedDB";
import NoWriteData from "../common/NoWriteData";
import NoSettingData from "../common/NoSettingData";
import { useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

const AccommodationList = () => {
  const { openModal } = useModal();
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [planData, setPlanData] =
    useRecoilState<DestinationData>(destinationData);
  const accommodations = planData.accommodation;
  const hasPlan = planData.planInfo.destination.length > 0;

  const onModal = (idx?: number) => {
    if (!hasPlan) return;
    const formData =
      typeof idx === "number"
        ? { formData: accommodations[idx], number: idx }
        : undefined;
    openModal("숙소", <AddAccommodationProvider data={formData} />);
  };

  const deleteItem = () => {
    const newAccommodations = accommodations.filter(
      (ele, index) => selectedIdx !== index
    );
    const newData = {
      accommodation: newAccommodations
    };
    updateData(planData.id!, newData).then(() => {
      setPlanData({
        ...planData,
        ...newData
      });
    });

    setConfirmModalOpen(false);
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
          {accommodations.map((ele, idx) => (
            <AccoBookItem
              key={idx}
              st={ele.startDate}
              end={ele.endDate}
              text={ele.text}
              accommodation={ele.title}
              onClick={() => onModal(idx)}
              deleteItem={() => {
                setSelectedIdx(idx);
                setConfirmModalOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div
          className="w-full h-[119px] bg-white rounded-[25px] mt-[30px] cursor-pointer"
          onClick={() => onModal()}
        >
          {hasPlan ? <NoWriteData title="숙소" /> : <NoSettingData />}
        </div>
      )}

      {isConfirmModalOpen && (
        <ConfirmModal
          type="confirm"
          imageType="delete"
          message="삭제하시겠습니까?"
          onConfirm={() => deleteItem()}
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AccommodationList;
