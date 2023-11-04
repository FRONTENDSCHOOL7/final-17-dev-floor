import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const contentState = atom({
  key: "contentState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const imageState = atom({
  key: "imageState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const postIdState = atom({
  key: "postIdState",
  default: localStorage.getItem("postId"),
  effects_UNSTABLE: [persistAtom],
});
