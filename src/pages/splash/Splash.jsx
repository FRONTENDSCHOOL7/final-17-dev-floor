import React, { useEffect } from 'react';
import LogoImg from '../../assets/images/Group 23.png';
import LogoTxtImg from '../../assets/images/dev-floor.png';
import { Logo } from '../login/LoginHomeStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--disableColor);
`
export default function Splash() {
    const navigate = useNavigate()
    function loginStatus() {
        const token = localStorage.getItem('token');
        return token !== null;
    }
    
    useEffect(() => {
        setTimeout(() => {
        const isLogged = loginStatus();
        if (isLogged) {
            navigate('/homefeed');
        } else {
            navigate('/home');
        }
        }, 1500);  
    }, [navigate]);

    return (
        <Main>
            <Logo>
                <h1>
                    <div className='logo'><img src={LogoImg} alt="로고이미지" /></div>
                    <div className='logoTxt'><img src={LogoTxtImg} alt="개발바닥" /></div>
                </h1>
            </Logo>
        </Main>
    );
}
