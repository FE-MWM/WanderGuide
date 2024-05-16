import { useForm, FormProvider } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { addData, updateData } from "../indexeddb/indexedDB";
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
  isUpdate: boolean;
};

const AddTravelDestinationProvider = ({
  onCloseModal,
  isUpdate
}: PropsData) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      member: "",
      destination: ""
    }
  });

  const isActivePlan = useRecoilValue<PlanListData | undefined>(activePlan);
  const initValue = useRecoilValue<DestinationData>(initData);
  const [destination, setDestination] =
    useRecoilState<DestinationData>(destinationData);
  const [list, setList] = useRecoilState<PlanListData[]>(planList);

  const saveDestination = (destinationFormData: FormValues) => {
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

    const setPlanList = (id: number) => {
      const planData = [
        ...list,
        {
          id: id,
          title: destinationFormData.title,
          isActive: list.length === 0 ? true : false
        }
      ];
      setList(planData);
    };

    delete data.id;
    addData(data).then((res) => {
      if (!isActivePlan) {
        setDestination({ ...data, id: Number(res) });
      }
      setPlanList(Number(res));
    });
    onCloseModal();
  };

  const updateDestination = (destinationFormData: FormValues) => {
    const apiParams = initValue.apiParams;
    const data = {
      ...destination,
      planInfo: {
        title: destinationFormData.title,
        startDate: destinationFormData.startDate,
        endDate: destinationFormData.endDate,
        member: destinationFormData.member,
        destination: destinationFormData.destination
      },
      apiParams: apiParams.영문명 !== "" ? apiParams : destination.apiParams
    };

    const planData = list.map((item) => {
      if (item.id === destination.id) {
        return { ...item, title: destinationFormData.title };
      }
      return item;
    });

    updateData(destination?.id as number, data);
    setList(planData);
    setDestination(data);
    onCloseModal();
  };

  const handleOnSave = () => {
    const formData = methods.getValues();

    const data = {
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      member: formData.member,
      destination: formData.destination
    };

    isUpdate ? updateDestination(data) : saveDestination(data);
    // saveDestination();
  };

  return (
    <FormProvider {...methods}>
      <AddTravelDestination
        onSave={handleOnSave}
        onCloseModal={onCloseModal}
        isUpdate={isUpdate}
      />
    </FormProvider>
  );
};

export default AddTravelDestinationProvider;
