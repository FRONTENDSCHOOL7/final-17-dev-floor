import { atom } from "recoil";

export const userNameState = atom({
  key: "userNameState",
  default: "",
});
export const idState = atom({
  key: "idState",
  default: "",
});
export const introState = atom({
  key: "introState",
  default: "",
});
export const nameValidState = atom({
  key: "nameValidState",
  default: null,
});
export const idValidState = atom({
  key: "idValidState",
  default: null,
});
