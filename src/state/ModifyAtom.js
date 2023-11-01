import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const introState = atom({
  key: "introState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const nameValidState = atom({
  key: "nameValidState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const idValidState = atom({
  key: "idValidState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom({
  key: "userName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userToken = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const apiImageState = atom({
  key: "apiImageState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const logoutModalState = atom({
  key: "logoutModalState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const profileImgState = atom({
  key: "profileImgState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
