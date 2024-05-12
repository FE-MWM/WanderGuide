import { ReactNode, createContext, useContext, useState } from "react";

type TabType = {
  key: string;
  title: string;
};

type TabContextData = {
  tabs: TabType[];
  activeTab: string;
  setActiveTab: (key: string) => void;
};
type TabProviderProps = {
  children: ReactNode;
};

const defaultState = {
  tabs: [],
  activeTab: "",
  setActiveTab: () => {}
};

const TabContext = createContext<TabContextData>(defaultState);

export const TabProvider = ({ children }: TabProviderProps) => {
  const tabs = [
    { key: "main", title: "메인" },
    { key: "book", title: "예약" }
  ];
  const [activeTab, setActiveTab] = useState<string>("main");

  return (
    <TabContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
