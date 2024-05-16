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

type AccommodationProps = {
  data?: {
    number: number;
    formData: FormValue;
  };
};

const AddAccommodationProvider = ({ data }: AccommodationProps) => {
  const { closeModal } = useModal();

  const methods = useForm<FormValue>({
    defaultValues: data?.formData || {
      title: "",
      startDate: "",
      endDate: "",
      text: ""
    }
  });

  const [DestinationData, setDestinationData] = useRecoilState(destinationData);

  const concatData = () => {
    const formData = methods.getValues();
    const newData = DestinationData.accommodation.concat(formData);

    return {
      accommodation: newData
    };
  };

  const changeData = () => {
    const formData = methods.getValues();
    const newData = DestinationData.accommodation.map((ele, idx) => {
      if (idx === data!.number) return formData;
      return ele;
    });

    return { accommodation: newData };
  };

  const handleOnSave = async () => {
    const newData = data ? changeData() : concatData();

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
