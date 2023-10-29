import { atom } from "recoil";

// login
export const emailState = atom({
    key: 'emailState',
    default: ''
})  
export const passwordState = atom({
    key: 'pwState',
    default: ''
})  
export const errorState = atom({
    key: 'errorState',
    default: ''
})  
export const errorPwState = atom({
    key: 'errorPwState',
    default: ''
})
export const tokenState = atom({
    key: 'tokenState',
    default: localStorage.getItem('token') || ''
}) 
export const idState = atom({
    key: "idState",
    default: "",
});

// join
export const preDataState = atom({
    key: 'preDataState',
    default: {
        email: '',
        password: '',
        username: '',
        accountname: '',
        intro: '',
        image: 'https://api.mandarin.weniv.co.kr/Ellipse.png',
    },
});
export const btnDisableState = atom({
    key: 'btnDisableState',
    default: false
})
export const joinBtnDisableState = atom({
    key: 'joinBtnDisableState',
    default: false
})
export const idValidErrorState = atom({
    key:'idValidErrorState',
    default: ''
})
export const idRegexErrorState = atom({
    key:'idRegexErrorState',
    default: null
})
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
    key: 'routeState',
    default: 'signup'
})
export const profileImgState = atom({
    key: 'profileImgState',
    default: ''
})