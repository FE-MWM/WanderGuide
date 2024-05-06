import React, { useState } from "react";
import Tab from "./Tab";
import MainDashboard from "./MainDashboard";
import BookDashboard from "./BookDashboard";

const TABS = [
  { key: "main", title: "메인" },
  { key: "book", title: "예약" }
];

const MainBody = () => {
  const [activeTab, setActiveTab] = useState("main");

  const onTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="w-full h-[calc(100%-57px)]">
      <Tab items={TABS} onClick={(key: string) => onTabChange(key)} />
      {activeTab === "main" && <MainDashboard />}
      {activeTab === "book" && <BookDashboard />}
    </div>
  );
};

export default MainBody;
