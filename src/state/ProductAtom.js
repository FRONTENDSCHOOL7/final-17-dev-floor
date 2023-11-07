import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const productImageState = atom({
  key: "productImageState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const productNameState = atom({
  key: "productNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const productPriceState = atom({
  key: "productPriceState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const productLinkState = atom({
  key: "productLinkState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const productState = atom({
  key: "productState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const productIdState = atom({
  key: "productIdState",
  default: localStorage.getItem("productId"),
  effects_UNSTABLE: [persistAtom],
});