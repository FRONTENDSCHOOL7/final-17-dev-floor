import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  default: localStorage.getItem("token"),
  effects_UNSTABLE: [persistAtom],
});
export const idState = atom({
  key: "idState",
  default: "",
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
    image: "https://api.mandarin.weniv.co.kr/Ellipse.png",
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

// export const userNameState = atom({
//     key: 'userNameState',
//     default: ''
// })
// export const accountNameState = atom({
//     key: 'accountNameState',
//     default: ''
// })
// export const introState = atom({
//     key: 'introState',
//     default: ''
// })
// export const imageState = atom({
//     key: 'imageState',
//     default: 'https://api.mandarin.weniv.co.kr/Ellipse.png'
// })
// export const emailValidState = atom({
//     key: 'emailValidState',
//     default: true
// })
export const routeState = atom({
  key: "routeState",
  default: "signup",
  effects_UNSTABLE: [persistAtom],
});
export const profileImgState = atom({
  key: "profileImgState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
