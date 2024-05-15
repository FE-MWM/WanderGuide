import { useForm, FormProvider } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { addData } from "../indexeddb/indexedDB";
import AddTravelDestination from "../components/AddTravelDestination";
import { DestinationData, destinationData } from "../store/destinationAtom";
import { PlanListData, activePlan, planList } from "../store/planListAtom";
import { initData } from "../store/initAtom";

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
      title: "",
      startDate: "",
      endDate: "",
      member: "",
      destination: ""
    }
  });

  const isActive = useRecoilValue<PlanListData | undefined>(activePlan);
  const initValue = useRecoilValue<DestinationData>(initData);
  const setDestination = useSetRecoilState<DestinationData>(destinationData);
  const [list, setList] = useRecoilState<PlanListData[]>(planList);

  const saveDestination = async (destinationFormData: FormValues) => {
    const data = {
      ...initValue,
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
    if (!isActive) {
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
