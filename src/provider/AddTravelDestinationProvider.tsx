import { useForm, FormProvider } from "react-hook-form";
import AddTravelDestination from "../components/AddTravelDestination";
import { Item, addData } from "../indexeddb/indexedDB";
import { useSetRecoilState } from "recoil";
import { destinationList } from "../store/destinationAtoms";

export type FormValues = {
  title: string;
  startDate: string;
  endDate: string;
  member: string;
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
      member: "",
      destination: ""
    }
  });
  const setDestination = useSetRecoilState<Item[]>(destinationList);

  const saveDestination = async (destination: FormValues) => {
    await addData(destination);
    setDestination((prev) => [...prev, destination]);
    onCloseModal();
  };

  const handleOnSave = () => {
    const formData = methods.getValues();
    saveDestination({
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      member: formData.member,
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
