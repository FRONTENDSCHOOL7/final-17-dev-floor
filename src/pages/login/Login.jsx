import React from 'react'
import LogoImg from '../../assets/images/logo.png'
import LogoTxtImg from '../../assets/images/logo-txt.png'
import { LoginBox, Logo, Main } from './LoginStyle'

export default function Login() {
    return (
        <Main>
            <div className='inner'>
                <Logo>
                    <h1>
                        <img src={LogoImg} alt="로고이미지" />
                        <img src={LogoTxtImg} alt="로고텍스트" />
                    </h1>
                </Logo>
                <LoginBox>

                </LoginBox>
            </div>
        </Main>
    )
}