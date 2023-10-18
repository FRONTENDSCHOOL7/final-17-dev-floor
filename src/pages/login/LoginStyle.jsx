import styled from "styled-components";

export const Main = styled.div`
    .inner {
        display: flex;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100vh;
        background: var(--bgColor);
    }
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
export const LoginBox = styled.div`
    border-radius: 20px 20px 0 0;
    background: #fff;
`