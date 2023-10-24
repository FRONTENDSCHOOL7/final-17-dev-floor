import styled from "styled-components";
import upload from "../../assets/images/upload-file.png";

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
export const Inner = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 30px auto 0;
    padding: 0 20px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
`
    export const Main = styled.div`
    .upload-img {
        width: 110px;
        height: 110px;
        display: block;
        margin: auto;
    }
    .upload-img::after {
        background: url(${upload}) no-repeat;
        content: "";
        display: inline-block;
        background-size: 36px 36px;
        height: 36px;
        width: 36px;
        margin: -50px 0px 30px 70px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        div {
        display: flex;
        flex-direction: column;
        margin-left: 34px;
        margin-right: 34px;
        margin-bottom: 16px;
        label {
            font-family: Spoqa Han Sans Neo;
            font-size: 12px;
            font-weight: 500;
        }
        input::placeholder {
            font-size: 14px;
            font-weight: 400;
            color: var(--DBDBDB, #dbdbdb);
        }
        input {
            border: none;
            border-bottom: 1px solid #dbdbdb;
            margin-top: 10px;
            height: 22px;
        }
        }
        .profileSubmit {
            padding-top: 30px;
            button {
                background: var(--disableColor);
                width: 322px;
                height: 44px;
                border-radius: 20px;
                color: var(--whiteColor);
                margin: auto;
        }}
    }
`;
export const Profile = styled.div`
    text-align: center;
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        color: var(--fontColor);
        padding: 12px 0 30px;
    }
`
