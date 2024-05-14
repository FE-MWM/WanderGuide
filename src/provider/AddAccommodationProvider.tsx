import { FormProvider, useForm } from "react-hook-form";
import AddAccommodation from "../components/AccommodationSection/AddAccommodation";
import { useRecoilState } from "recoil";
import { destinationData } from "../store/destinationAtom";
import { updateData } from "../indexeddb/indexedDB";
import { useModal } from "../context/ModalContext";

export type FormValue = {
  title: string;
  startDate: string;
  endDate: string;
  text: string;
};

const AddAccommodationProvider = () => {
  const { closeModal } = useModal();

  const methods = useForm<FormValue>({
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      text: ""
    }
  });

  const [DestinationData, setDestinationData] = useRecoilState(destinationData);

  const handleOnSave = async () => {
    const formData = methods.getValues();
    const newData = {
      accommodation: DestinationData.accommodation.concat(formData)
    };

    if (DestinationData.id) {
      setDestinationData({
        ...DestinationData,
        ...newData
      });
      updateData(DestinationData.id, newData).then(() => closeModal());
    }
  };

  return (
    <FormProvider {...methods}>
      <AddAccommodation onSave={handleOnSave} />
    </FormProvider>
  );
};

export default AddAccommodationProvider;
