import { Item } from "./Indexed";

let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export const initDB = (): Promise<boolean | IDBDatabase> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("myDB", 1);

    // if the data object store doesn't exist, create it
    request.onupgradeneeded = (ev) => {
      const db = request.result;

      const oldVersion = ev.oldVersion;
      // console.log(oldVersion); //0
      if (oldVersion < 1) {
        db.createObjectStore(`plan`, {
          keyPath: "id",
          autoIncrement: true
        });
      }
      // no need to resolve here
    };

    request.onsuccess = (e) => {
      db = request.result;
      // get current version and store it
      version = db.version;
      resolve(request.result);
    };

    request.onerror = (e) => {
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open("myDB", version);

    request.onsuccess = () => {
      console.log("request.onsuccess - addData", data);
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
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

export const deleteData = (
  storeName: string,
  key: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - deleteData", key);
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);
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
  storeName: string,
  key: number,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - updateData", key);
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.get(key);
      res.onsuccess = () => {
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

export const getStoreData = <T>(storeName: string): Promise<Item[]> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - getAllData");
      const db = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        console.log(res.result);
        resolve(res.result);
      };
    };
  });
};

export const getData = (storeName: string, id: number): Promise<Item> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("wanderGuideDB", 1);

    request.onsuccess = () => {
      console.log("request.onsuccess - getAllData");
      const db = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.get(id);
      res.onsuccess = () => {
        console.log(res.result);
        resolve(res.result);
      };
    };
  });
};

export {};
