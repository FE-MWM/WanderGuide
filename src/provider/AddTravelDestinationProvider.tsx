import { useForm, FormProvider } from "react-hook-form";
import AddTravelDestination from "../components/AddTravelDestination";
import { useRecoilState } from "recoil";
import { addData } from "../indexeddb/indexedDB";
import { DestinationData, destinationData } from "../store/destinationAtom";
import { PlanListData, planList } from "../store/planListAtom";

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

  const [destination, setDestination] =
    useRecoilState<DestinationData>(destinationData);
  const [list, setList] = useRecoilState<PlanListData[]>(planList);

  const saveDestination = async (destinationFormData: FormValues) => {
    const data = {
      ...destination,
      planInfo: {
        title: destinationFormData.title,
        startDate: destinationFormData.startDate,
        endDate: destinationFormData.endDate,
        member: destinationFormData.member,
        destination: destinationFormData.destination
      }
    };
    const planData = [
      ...list,
      {
        id: list.length + 1,
        title: destinationFormData.title,
        isActive: list.length === 0 ? true : false
      }
    ];
    delete data.id;
    setList(planData);
    if (!destination) {
      setDestination(data);
    }
    await addData(data);
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
