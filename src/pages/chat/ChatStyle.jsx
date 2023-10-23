import styled from 'styled-components';

export const Body = styled.div`
  /* border: 3px dashed gray; */
    height: 100vh;
    width: 390px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  /* transform: translateX(-10%); */
`;

// top bar
export const TopBar = styled.div`
    max-width: 720px;
    width: 100%;
    padding: 0 20px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
    }
`;
// top bar

// section 1
export const Sect1 = styled.div`
    max-width: 720px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`;

export const Chat1 = styled.div`
    display: flex;
    max-width: 720px;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
    margin-top: 10px;
    gap: 0px;

	img {
        padding: 10px 10px 10px 10px ;
        width: 42px;
        height: 42px;
    } 

    div {
        font-size: 13px;
        width: 300px;
        height: 50px;
        line-height: 30px;
        justify-content: space-between;
    }

    .text {
        display: flex;
        justify-content : space-between;
    }
`;
