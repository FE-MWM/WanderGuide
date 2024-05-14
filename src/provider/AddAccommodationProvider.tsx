import { FormProvider, useForm } from "react-hook-form";
import AddAccommodation from "../components/AccommodationSection/AddAccommodation";

export type FormValue = {
  title: string;
  startDate: string;
  endDate: string;
  text: string;
};

const AddAccommodationProvider = () => {
  const methods = useForm<FormValue>({
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      text: ""
    }
  });

  const handleOnSave = async () => {
    const formData = methods.getValues();
    console.log("숙소데이터", formData);
  };

  return (
    <FormProvider {...methods}>
      <AddAccommodation onSave={handleOnSave} />
    </FormProvider>
  );
};

export default AddAccommodationProvider;
