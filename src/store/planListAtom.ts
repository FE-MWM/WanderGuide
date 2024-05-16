import { atom, selector } from "recoil";

export type PlanListData = {
  id: number;
  title: string;
  isActive: boolean;
};

export const planList = atom<PlanListData[]>({
  key: "planList",
  default: []
});

export const activePlan = selector({
  key: "activePlan",
  get: ({ get }) => {
    const list = get(planList);
    return list.find((item) => item.isActive);
  }
});
