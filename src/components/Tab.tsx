import React from "react";

type PropsData = {
  key: string;
  title: string;
};

type PropsType = {
  items: PropsData[];
  onClick: (key: string) => void;
};

const Tab = ({ items, onClick }: PropsType) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px">
        {items.map((tab) => (
          <li key={tab.key} className="me-2" onClick={() => onClick(tab.key)}>
            <a
              href="#"
              className="w-[100px] inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-500"
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
