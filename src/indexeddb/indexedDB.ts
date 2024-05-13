export type Item = {
  id?: number;
  title: string;
  startDate: string;
  endDate: string;
  member: string;
  destination: string;
  accomo?: string;
  leisure?: string;
};

// 데이터 베이스 체크 & 생성
export const initDB = (): Promise<boolean | IDBDatabase> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    // 데이터 베이스 버전 체크
    // 버전이 아예 없는 경우(1보다 작은 경우) 새 Store 생성
    request.onupgradeneeded = (ev) => {
      const db = request.result;

      const oldVersion = ev.oldVersion;
      // console.log(oldVersion); //0
      if (oldVersion < 1) {
        //id는 숫자로, 자동 증가
        db.createObjectStore(`destination`, {
          keyPath: "id",
          autoIncrement: true
        });
      }
      // no need to resolve here
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

// 데이터를 넘기면 Store의 (최고값)id +1 로 저장됩니다.
export const addData = <T>(data: T): Promise<T | string | null> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - addData", data);
      const db = request.result;
      const tx = db.transaction("destination", "readwrite");
      const store = tx.objectStore("destination");
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown error");
      }
    };
  });
};

export const deleteData = (id: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - deleteData", id);
      const db = request.result;
      const tx = db.transaction("destination", "readwrite");
      const store = tx.objectStore("destination");
      const res = store.delete(id);
      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};

export const updateData = <T>(
  id: number,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - updateData", id);
      const db = request.result;
      const tx = db.transaction("destination", "readwrite");
      const store = tx.objectStore("destination");
      // id로 저장된 값 조회
      const res = store.get(id);
      res.onsuccess = () => {
        //조회한 값에 덮어씌우기
        const newData = { ...res.result, ...data };
        store.put(newData);
        resolve(newData);
      };
      res.onerror = () => {
        resolve(null);
      };
    };
  });
};

//  store의 저장된 모든 값 가져오기
export const getStoreData = (): Promise<Item[]> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - getAllData");
      const db = request.result;
      const tx = db.transaction("destination", "readonly");
      const store = tx.objectStore("destination");
      const res = store.getAll();
      res.onsuccess = () => {
        console.log(res.result);
        resolve(res.result);
      };
    };
  });
};

// id로 조회한 값만 가져오기
export const getData = (id: number): Promise<Item> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - getAllData");
      const db = request.result;
      const tx = db.transaction("destination", "readonly");
      const store = tx.objectStore("destination");
      const res = store.get(id);
      res.onsuccess = () => {
        console.log(res.result);
        resolve(res.result);
      };
    };
  });
};
