import { atom } from "recoil";

export const followState = atom({
  key: "followState",
  default: "",
});
export const followersState = atom({
  key: "followersState",
  default: [false, false],
});
export const followingState = atom({
  key: "followingState",
  default: [true, true],
});
export const hamburgerBtnState = atom({
  key: "hamburgerBtnState",
  default: true,
});
