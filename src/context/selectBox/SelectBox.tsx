import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import SelectItem from "./SlectItem";
import SelectTrriger from "./SelectTrigger";
import SelectList from "./SelectList";
import SelectInput from "./SelectInput";

type SelectBoxProps = {
  children: ReactNode;
  defaultValue?: { label: string; value: string };
  onChange?: (args: { label: string; value: string }) => void;
};

export const selectState = createContext({
  isOn: false,
  selected: { label: "", value: "" }
});
export const selectDispatch = createContext({
  handleList: (type: boolean) => {},
  handleSelect: (item: { value: string; label: string }) => {},
  clearSelected: () => {}
});

const SelectBox = ({ children, defaultValue, onChange }: SelectBoxProps) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [selected, setSelected] = useState<{ label: string; value: string }>({
    label: defaultValue?.label || "",
    value: defaultValue?.value || ""
  });

  const handleList = (type: boolean) => {
    setIsOn(type);
  };

  const handleSelect = (item: { value: string; label: string }) => {
    setSelected(item);
  };

  const clearSelected = () => {
    setSelected({ label: "", value: "" });
  };

  //일단 보류.
  useEffect(() => {
    onChange?.(selected);
  }, [selected.label, selected.value]);

  const dispatch = useMemo(
    () => ({ handleList, handleSelect, clearSelected }),
    []
  );

  return (
    <selectState.Provider value={{ isOn, selected }}>
      <selectDispatch.Provider value={dispatch}>
        {children}
      </selectDispatch.Provider>
    </selectState.Provider>
  );
};

export default SelectBox;

SelectBox.container = SelectTrriger;
SelectBox.list = SelectList;
SelectBox.item = SelectItem;
SelectBox.input = SelectInput;
