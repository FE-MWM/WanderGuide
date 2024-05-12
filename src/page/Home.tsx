import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import { TabProvider } from "../context/TabContext";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-[#f5f7fa]  min-h-[800px] min-w-[1500px]">
      <nav className="w-[230px] h-full">
        <Navbar />
      </nav>
      <main className="w-[calc(100%-260px)] h-full flex-1">
        <Header />
        <TabProvider>
          <Body />
        </TabProvider>
      </main>
    </div>
  );
};

export default Home;
