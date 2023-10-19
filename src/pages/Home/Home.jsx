import React from 'react'
import LogoImg from '../../assets/images/Group 23.png'
import KakaoImg from '../../assets/images/message-circle.png'
import GoogleImg from '../../assets/images/Google__G__Logo 1.png'
import facebookImg from '../../assets/images/facebook.png'
import { BlueHomeBox, GrayHomeBox, HomeBoxWrap, HomeEmail, HomeWrap, LemonHomeBox, Logo, Main } from './HomeStyle'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Main>
            <Logo>
                <h1>
                    <img src={LogoImg} alt="로고이미지" />
                    개발바닥
                </h1>
            </Logo>
            <HomeWrap>
                <HomeBoxWrap>
                    <LemonHomeBox>
                        <div className='leftBox'>
                            <img src={KakaoImg} alt="카카오톡" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>카카오톡 계정으로 로그인</button>
                        </div>
                    </LemonHomeBox>
                    <GrayHomeBox>
                        <div className='leftBox'>
                            <img src={GoogleImg} alt="구글" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>구글 계정으로 로그인</button>
                        </div>
                    </GrayHomeBox>
                    <BlueHomeBox>
                        <div className='leftBox'>
                            <img src={facebookImg} alt="페이스톡" />
                        </div>
                        <div className='rightBox'>
                            <button type='button'>페이스톡 계정으로 로그인</button>
                        </div>
                    </BlueHomeBox>
                    <HomeEmail>
                        <div className="email">
                            <Link to="/login">이메일로 로그인</Link>
                        </div>
                        <div className="join">
                            <Link to="/join">회원가입</Link>
                        </div>
                    </HomeEmail> 
                </HomeBoxWrap>
            </HomeWrap>
        </Main>
    )
}