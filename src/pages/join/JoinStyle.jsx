import styled from "styled-components";

export const JoinWrap = styled.div`
    background: var(--whiteColor);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const JoinInner = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 30px auto 0;
    padding: 0 20px;
    box-sizing: border-box; 
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
`
export const JoinTit = styled.div`
    margin: auto;
    h2 {
        color: var(--bgColor);
    }
`
export const JoinForm = styled.form`
    width: 100%;
`
export const Email = styled.div`
    span {
        display: block;
        font-size: 0.8rem;
        color: var(--fontColor);
    }
    input {
        border-bottom: 1px solid var(--borderColor);
    }
`
export const Password = styled.div`
    margin-top: 16px;
    span {
        display: block;
        font-size: 0.8rem;
        color: var(--fontColor);
    }
    input {
        border-bottom: 1px solid var(--borderColor);
    }
`
export const Submit = styled.div`
    margin-top: 30px;
    a {
        display: block;
        line-height: 44px;
        text-align: center;
        width: 100%;
        height: 44px;
        color: var(--whiteColor);
        border-radius: 20px;
        background: var(--disableColor);
    }
`