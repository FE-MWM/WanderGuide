import { FormProvider, useForm } from "react-hook-form";
import AddFlight from "../components/FlightPlansSection/AddFlight";
import { useRecoilState } from "recoil";
import { DestinationData, destinationData } from "../store/destinationAtom";
import { updateData } from "../indexeddb/indexedDB";
import { useModal } from "../context/ModalContext";

export type FormValue = {
  [key: string]: string | boolean;
};

const createDefaultValues = (prefixes: string[]) => {
  const defaultValues: FormValue = {};
  prefixes.forEach((prefix) => {
    defaultValues[`${prefix}Departure`] = "";
    defaultValues[`${prefix}DepartureDate`] = "";
    defaultValues[`${prefix}DepartureTime`] = "";
    defaultValues[`${prefix}Airline`] = "";
    defaultValues[`${prefix}FlightNumber`] = "";
    defaultValues[`${prefix}ArrivalDate`] = "";
    defaultValues[`${prefix}ArrivalTime`] = "";
    defaultValues[`${prefix}Stopover`] = "false";
    defaultValues[`${prefix}Arrival`] = "";
  });
  return defaultValues;
};

type prefixProps = {
  prefixes: string[];
};
const AddFlightPlanProvider = ({ prefixes }: prefixProps) => {
  const { closeModal } = useModal();
  const [destination, setDestination] =
    useRecoilState<DestinationData>(destinationData);

  const methods = useForm({
    defaultValues: createDefaultValues(prefixes)
  });

  const handleOnSave = async () => {
    const formData = methods.getValues();
    const flightData: DestinationData = {
      ...destination,
      flight: { ...formData }
    };
    setDestination(flightData);
    if (destination.id) {
      await updateData(destination.id, flightData);
    }
    closeModal();
  };

  return (
    <FormProvider {...methods}>
      <AddFlight onSave={handleOnSave} />
    </FormProvider>
  );
};

export default AddFlightPlanProvider;
