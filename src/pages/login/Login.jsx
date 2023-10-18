import React from 'react'
import LogoImg from '../../assets/Images/symbol-logo.png'
import { Logo, Main } from './LoginStyle'

export default function Login() {
    return (
        <>
            <Main>
                <Logo>
                    <h1>
                        <img src={LogoImg} alt="로고이미지" />
                    </h1>
                </Logo>
            </Main>
        </>
    )
}
