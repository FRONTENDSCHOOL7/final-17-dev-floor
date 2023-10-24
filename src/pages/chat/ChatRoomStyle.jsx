import styled from 'styled-components';

export const Body = styled.div`
  /* border: 3px dashed gray; */
    max-width: 720px;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TopBarChat = styled.div`
    max-width: 720px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    
    button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
    }
    
    h2 {
    transform: translateY(-10%);
    font-size: 14px;
    font-weight: bold;
    margin-left: -450px;
    }
`;
export const Sect1 = styled.div`
    max-width: 720px;
    width: 100%;
    height: 100%;
`;

export const ChatWrap = styled.div`
    max-width: 720px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box; 
    display: flex;
    gap: 5px;

	img {
        padding: 10px 10px 10px 10px ;
        width: 42px;
        height: 42px;
    } 

    .time {
        display: flex;
        justify-content : space-between;
        color: #a6a6a6;
        font-size: 10px;
        text-align: right bottom;
    }

    .chatbox {
        display: inline-block;
        position: relative;
        background-color: #ffffff;
        border-radius: 0px 15px 15px 15px;
        border: 1px solid #c4c4c4;
        color: #000000;
        padding: 7px 12px;
        margin-bottom: 10px;
        max-width: 230px;
        font-size: 14px;
        line-height: 18px;
}
`;

export const MyChatWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 720px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box; 
    gap: 0px;

    .chatboxMe {
        position: relative;
        background-color: #CB9367;
        border-radius: 15px 0px 15px 15px;
        border: 1px solid;
        color: #ffffff;
        padding: 7px 12px;
        margin-bottom: 10px;
        max-width: 230px;
        font-size: 14px;
        line-height: 18px;
}

    img {
        padding: 10px 10px 10px 10px ;
        width: 142px;
        height: 142px;
    } 

    .time {
        display: flex;
        justify-content : space-between;
        color: #a6a6a6;
        font-size: 10px;
    }
`;

export const ChatBar = styled.div`
    .chat-container {
    display: flex;
    align-items: center;
    max-width: 720px;
    width: 100%;
    border-top: 0.5px solid var(--DBDBDB, #dbdbdb);
    padding: 5px 5px 5px 5px;

    .chat-list {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .photo-img {
        width: 36px;
        height: 36px;
    }
    .chat-title {
        width: 100%;
        max-width: 720px;
        padding-bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        button {
        display: flex;
        align-items: center;
        width: 40px;
        font-size: 14px;
        color: #c4c4c4;
    }

    input {
        display: block;
    }

    input::placeholder {
        color: #c4c4c4;
        font-size: 14px;
        }
    }
  }
`;
