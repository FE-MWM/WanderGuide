import { useEffect, useRef, useState } from "react";
import { addData, getStoreData, initDB, updateData } from "./indexedDB";

export type Item = {
  id: number;
  title: string;
  country: string;
  date: string;
  member: string;
  accomo?: string;
  leisure?: string;
};

export default function Indexed() {
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [planList, setPlanList] = useState<Item[]>([]);

  const keyRef = useRef<number>(0);

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      country: { value: string };
      date: { value: string };
      title: { value: string };
    };

    const name = target.name.value;
    const country = target.country.value;
    const date = target.date.value;
    const title = target.title.value;

    const res = await addData({ name, country, date, title });
  };
  const save2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      accomo: { value: string };
    };

    const accomo = target.accomo.value;

    const res = await updateData(keyRef.current, { accomo });
  };

  useEffect(() => {
    // setPlanList(objectStoreList);
    //handleInitDB();
    initDB();
    getStoreData().then((res) => setPlanList(res));
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>IndexedDB</h1>
      <button className={"mx-[5px] border"} onClick={() => setModal(true)}>
        여행지 추가
      </button>
      {planList.map((ele, idx) => {
        return (
          <button
            className="w-[200px] p-[5px] border mx-auto my-[10px]"
            key={idx}
            onClick={() => {
              keyRef.current = ele.id;
              setModal2(true);
            }}
          >
            {ele.country}
            {ele.id}
          </button>
        );
      })}
      {modal && (
        <form onSubmit={save}>
          <label className="border">
            <span>제목</span>
            <input type="text" name="title" className="border" />
          </label>
          <label className="border">
            <span>누구랑</span>
            <input type="text" name="name" className="border" />
          </label>
          <label>
            <span>언제</span>
            <input type="date" name="date" className="border" />
          </label>
          <label>
            <span>어느 나라를</span>
            <input type="text" name="country" className="border" />
          </label>

          <button className={"mx-[5px] border"} type="submit">
            저장
          </button>
          <button
            className={"mx-[5px] border"}
            type="button"
            onClick={() => setModal(false)}
          >
            취소
          </button>
        </form>
      )}

      {modal2 && (
        <form onSubmit={save2}>
          <label className="border">
            <span>숙소 이름</span>
            <input type="text" name="accomo" className="border" />
          </label>

          <button className={"mx-[5px] border"} type="submit">
            저장
          </button>
          <button
            className={"mx-[5px] border"}
            type="button"
            onClick={() => setModal2(false)}
          >
            취소
          </button>
        </form>
      )}
    </main>
  );
}
