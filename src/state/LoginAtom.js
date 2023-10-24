import { atom } from "recoil";

export const emailState = atom({
    key: 'emailState',
    default: ''
})  
export const pwState = atom({
    key: 'pwState',
    default: ''
})  
export const errorState = atom({
    key: 'errorState',
    default: ''
})  
export const tokenState = atom({
    key: 'tokenState',
    default: localStorage.getItem('token') || ''
}) 