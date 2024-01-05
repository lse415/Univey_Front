import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();
 

export const userState = atom({
  key: "userState",
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const graphState = atom({
  key: "graphState",
  default:{Type:'Line',Detail:'first'},
  effects_UNSTABLE: [persistAtom]
})