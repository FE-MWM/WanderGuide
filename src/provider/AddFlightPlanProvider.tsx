import { FormProvider, useForm } from "react-hook-form";
import AddFlight from "../components/FlightPlansSection/AddFlight";

export type FormValue = {
  [key: string]: string | boolean;
};

const createDefaultValues = (prefixes: string[]) => {
  const defaultValues: FormValue = {};
  prefixes.forEach((prefix) => {
    defaultValues[`${prefix}Departure`] = "";
    defaultValues[`${prefix}DepartureLocation`] = "";
    defaultValues[`${prefix}DepartureDate`] = "";
    defaultValues[`${prefix}DepartureTime`] = "";
    defaultValues[`${prefix}Airline`] = "";
    defaultValues[`${prefix}FlightNumber`] = "";
    defaultValues[`${prefix}ArrivalDate`] = "";
    defaultValues[`${prefix}ArrivalTime`] = "";
    defaultValues[`${prefix}Stopover`] = false;
    defaultValues[`${prefix}ArrivalLocation`] = "";
  });
  return defaultValues;
};

type prefixProps = {
  prefixes: string[];
};
const AddFlightPlanProvider = ({ prefixes }: prefixProps) => {
  const methods = useForm({
    defaultValues: createDefaultValues(prefixes)
  });

  const handleOnSave = async () => {
    const formData = methods.getValues();
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <AddFlight onSave={handleOnSave} />
    </FormProvider>
  );
};

export default AddFlightPlanProvider;
