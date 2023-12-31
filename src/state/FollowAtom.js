import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const followState = atom({
  key: "followState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const followersState = atom({
  key: "followersState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const followingState = atom({
  key: "followingState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const hamburgerBtnState = atom({
  key: "hamburgerBtnState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
