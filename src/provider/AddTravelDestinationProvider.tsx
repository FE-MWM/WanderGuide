import { useForm, FormProvider } from "react-hook-form";
import AddTravelDestination from "../components/AddTravelDestination";
import { addData } from "../indexeddb/indexedDB";

export type FormValues = {
  title: string;
  startDate: string;
  endDate: string;
  who: string;
  destination: string;
};

type PropsData = {
  onCloseModal: () => void;
};

const AddTravelDestinationProvider = ({ onCloseModal }: PropsData) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: "기본 제목",
      startDate: "",
      endDate: "",
      who: "",
      destination: ""
    }
  });
  const saveDestination = async (destination: FormValues) => {
    await addData(destination);
    onCloseModal();
  };

  const handleOnSave = () => {
    const formData = methods.getValues();
    saveDestination({
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      who: formData.who,
      destination: formData.destination
    });
  };

  return (
    <FormProvider {...methods}>
      <AddTravelDestination onSave={handleOnSave} onCloseModal={onCloseModal} />
    </FormProvider>
  );
};

export default AddTravelDestinationProvider;
