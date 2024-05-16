import Tab from "./Tab";
import MainDashboard from "./MainDashboard";
import BookDashboard from "./BookDashboard";
import { useTab } from "../context/TabContext";

const MainBody = () => {
  const { tabs, activeTab, setActiveTab } = useTab();

  return (
    <div className="w-full h-[calc(100%-57px)]">
      <Tab
        items={tabs}
        onClick={(key: string) => setActiveTab(key)}
        activeTab={activeTab}
      />
      {activeTab === "main" && <MainDashboard />}
      {activeTab === "book" && <BookDashboard />}
    </div>
  );
};

export default MainBody;
