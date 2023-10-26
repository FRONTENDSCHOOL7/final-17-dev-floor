import { atom } from "recoil";

export const productImageState = atom({
  key: "productImageState",
  default: null,
});

export const productNameState = atom({
  key: "productNameState",
  default: "",
});

export const productPriceState = atom({
  key: "productPriceState",
  default: "",
});

export const productLinkState = atom({
  key: "productLinkState",
  default: "",
});