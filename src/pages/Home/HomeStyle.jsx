import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--bgColor);
`
export const Logo = styled.div`
    margin: auto;
    h1 {
        width: 144px;
        img {
            width: 100%;
        }
    }
`
export const HomeWrap = styled.div`
    width: 100%;
    height: 319px;
`
export const HomeBoxWrap = styled(Main)`
    gap: 10px;
    height: 100%;
    border-radius: 20px 20px 0 0;
    background: #fff;
`
export const HomeBox = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 44px;
    border-radius: 20px;
    background: #fff;
    border: 1px solid var(--fontColor);
    .leftBox { 
        margin-left: 3vw;
    }
    .rightBox {
        margin: 0 auto;
        color: var(--fontColor);
    }
`
export const LemonHomeBox = styled(HomeBox)`
    border-color: #F2C94C;
`
export const GrayHomeBox = styled(HomeBox)`
    border-color: var(--fontColor);
`
export const BlueHomeBox = styled(HomeBox)`
    border-color: #2D9CDB;
`
export const HomeEmail = styled.div`
    display: flex;
    height: 44px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .email a, .join a{
        position: relative;
    }
    .email a::after {
        position: absolute;
        width: 1px;
        height: 18px;
        content: '';
        display: block;
        background-color: var(--fontColor);
        top: 0;
        right: -15px;
    }
`
