import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import profileImg from "../assets/images/Group 26.png";
const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

// login
export const emailState = atom({
  key: "emailState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const passwordState = atom({
  key: "pwState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const errorState = atom({
  key: "errorState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const errorPwState = atom({
  key: "errorPwState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const tokenState = atom({
  key: "tokenState",
  default: localStorage.getItem("token"),
  effects_UNSTABLE: [persistAtom],
});
export const idState = atom({
  key: "idState",
  default: "",
});
// 토큰없으면 로그인페이지
export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
// join
export const preDataState = atom({
  key: "preDataState",
  default: {
    email: "",
    password: "",
    username: "",
    accountname: "",
    intro: "",
    image: profileImg,
  },
  effects_UNSTABLE: [persistAtom],
});
export const btnDisableState = atom({
  key: "btnDisableState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const joinBtnDisableState = atom({
  key: "joinBtnDisableState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const idValidErrorState = atom({
  key: "idValidErrorState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const idRegexErrorState = atom({
  key: "idRegexErrorState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const accountNameState = atom({
  key: "accountNameState",
  default: localStorage.getItem("account"),
  effects_UNSTABLE: [persistAtom],
});

export const myProfileImage = atom({
  key: "myProfileImage",
  default: localStorage.getItem("image"),
  effects_UNSTABLE: [persistAtom],
});

export const routeState = atom({
  key: "routeState",
  default: "signup",
  effects_UNSTABLE: [persistAtom],
});
export const profileImgState = atom({
  key: "profileImgState",
  default: profileImg,
  effects_UNSTABLE: [persistAtom],
});
export const postMyAhtuorIdState = atom({
  key: "postMyAhtuorIdState",
  default: localStorage.getItem("myAhthorId"),
  effects_UNSTABLE: [persistAtom],
});
