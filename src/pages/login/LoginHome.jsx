import React from 'react'
import LogoImg from '../../assets/images/Group 23.png'
import LogoTxtImg from '../../assets/images/dev-floor.png'
import KakaoImg from '../../assets/images/message-circle.png'
import GoogleImg from '../../assets/images/Google__G__Logo 1.png'
import facebookImg from '../../assets/images/facebook.png'
import { BlueLoginHomeBox, GrayLoginHomeBox, LoginHomeBoxWrap, LoginHomeEmail, LoginHomeWrap, LemonLoginHomeBox, Logo, Main } from './LoginHomeStyle'
import { Link } from 'react-router-dom'

export default function LoginHome() {
    return (
        <Main>
            <Logo>
                <h1>
                    <div className='logo'><img src={LogoImg} alt="로고이미지" /></div>
                    <div className='logoTxt'><img src={LogoTxtImg} alt="프로젝트이름" /></div>
                </h1>
            </Logo>
            <LoginHomeWrap>
                <LoginHomeBoxWrap>
                    <LemonLoginHomeBox>
                        <div className='leftBox'>
                            <img src={KakaoImg} alt="카카오톡" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>카카오톡 계정으로 로그인</button>
                        </div>
                    </LemonLoginHomeBox>
                    <GrayLoginHomeBox>
                        <div className='leftBox'>
                            <img src={GoogleImg} alt="구글" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>구글 계정으로 로그인</button>
                        </div>
                    </GrayLoginHomeBox>
                    <BlueLoginHomeBox>
                        <div className='leftBox'>
                            <img src={facebookImg} alt="페이스톡" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>페이스톡 계정으로 로그인</button>
                        </div>
                    </BlueLoginHomeBox>
                    <LoginHomeEmail>
                        <div className="email">
                            <Link to="/login">이메일로 로그인</Link>
                        </div>
                        <div className="join">
                            <Link to="/join">회원가입</Link>
                        </div>
                    </LoginHomeEmail> 
                </LoginHomeBoxWrap>
            </LoginHomeWrap>
        </Main>
    )
}
