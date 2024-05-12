import { atom } from "recoil";
import { Item } from "../indexeddb/indexedDB";

export const destinationList = atom<Item[]>({
  key: "destinationList",
  default: []
});
