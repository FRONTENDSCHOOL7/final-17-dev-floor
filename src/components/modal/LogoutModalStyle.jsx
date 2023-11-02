import styled from "styled-components";

export const Sect1 = styled.div`
    width: 100%;
    .container {
        width: 100%;
        max-width: 720px;
        height: 110px;
        z-index: 999;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: white;
        border: 1px solid gray;
        border-radius: 10px 10px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .barr {
        width: 720px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .letter {
        text-align: center;
        width: 720px;
        p {
            border-bottom: 1px solid var(--borderColor);
            padding: 10px 0;
        }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        button.logout {
            color: var(--focusColor);
        }
    }
    }
`;
