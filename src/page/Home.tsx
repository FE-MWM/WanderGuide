import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import { TabProvider } from "../context/TabContext";
import { getStoreData, initDB } from "../indexeddb/indexedDB";
import { PlanListData, planList } from "../store/planListAtom";
import { DestinationData, destinationData } from "../store/destinationAtom";

const Home = () => {
  // indexedDB 비동기여서. indexedDB를 기다리는 분기 추가
  const [isReady, setIsReady] = useState<boolean>(false);
  const setDestination = useSetRecoilState<DestinationData>(destinationData);
  const setList = useSetRecoilState<PlanListData[]>(planList);

  useEffect(() => {
    initDB();
    getStoreData().then((res) => {
      setIsReady(true);
      if (res.length > 0) {
        setDestination(res[0]);
      }
      const planList = res.map((data, index) => {
        return {
          id: data.id as number,
          title: data.planInfo.title,
          isActive: index === 0 ? true : false
        };
      });
      setList(planList);
    });
  }, []);
  return (
    <div className="flex w-full h-full bg-[#f5f7fa]  min-h-[800px] min-w-[1500px]">
      {isReady && (
        <>
          <TabProvider>
            <nav className="w-[230px] h-full">
              <Navbar />
            </nav>
            <main className="w-[calc(100%-260px)] h-full flex-1">
              <Header />
              <Body />
            </main>
          </TabProvider>
        </>
      )}
    </div>
  );
};

export default Home;
