import React from "react";

type PropsData = {
  key: string;
  title: string;
};

type PropsType = {
  items: PropsData[];
  onClick: (key: string) => void;
  activeTab: string;
};

const Tab = ({ items, onClick, activeTab }: PropsType) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500  ">
      <ul className="flex flex-wrap -mb-px mx-9 border-b">
        {items.map((tab) => (
          <li
            key={tab.key}
            className=" cursor-pointer"
            onClick={() => onClick(tab.key)}
          >
            <a
              href="#"
              className={`w-[100px] inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-blue-500 ${activeTab === tab.key ? "text-gray-800 border-blue-500" : "border-transparent"} courser-pointer`}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
