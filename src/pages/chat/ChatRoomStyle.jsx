import styled from "styled-components";

export const Body = styled.div`
  max-width: 720px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;

export const TopBarChat = styled.div`
  max-width: 720px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);

  button {
    width: 22px;
    height: 22px;
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }

  h2 {
    transform: translateY(-15%);
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
`;
// export const TopBarChat = styled.div`
//   max-width: 720px;
//   width: 100%;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);

//   button {
//   margin: 13px 16px;
//   background: #fff;
//   border-style: none;
//   }

//   h2 {
//   width: 600px;
//   font-size: 15px;
//   font-weight: bold;
//   align-items: left;
//   }
// `;
export const Sect1 = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

export const ChatWrap = styled.div`
  max-width: 720px;
  width: 100%;
  box-sizing: border-box;
  display: flex;

  img {
    padding: 10px 10px 10px 10px;
    width: 42px;
    height: 42px;
  }

  .time {
    display: flex;
    justify-content: space-between;
    color: #a6a6a6;
    font-size: 10px;
    flex-direction: column-reverse;
  }

  .chatbox {
    color: #000000;
    background: #ffffff;
    border-radius: 0px 15px 15px 15px;
    border: 1px solid #c4c4c4;
    padding: 7px 12px;
    margin-top: 10px;
    max-width: 230px;
    font-size: 14px;
    line-height: 18px;
    margin-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
`;

export const MyChatWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: end;
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: end;
  gap: 0px;
  margin-top: 10px;

  .chatboxMe {
    position: relative;
    background-color: #7a8ccb;
    border-radius: 15px 0px 15px 15px;
    border: 1px solid;
    color: #ffffff;
    padding: 7px 12px;
    margin-top: 10px;
    max-width: 230px;
    font-size: 14px;
    line-height: 18px;
    margin-left: 10px;
  }

  img {
    width: 142px;
    height: 142px;
    float: right;
    margin-left: 10px;
  }

  .time {
    /* display: flex; */
    /* justify-content : space-between; */
    color: #a6a6a6;
    font-size: 10px;
    /* flex-direction: column; */
  }
`;

export const ChatBar = styled.div`
  .chat-container {
    display: flex;
    align-items: center;
    max-width: 710px;
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

      .btnDisabled {
        display: block;
        width: 40px;
        font-size: 14px;
        color: #c4c4c4;
      }
      .btnActive {
        display: block;
        width: 40px;
        font-size: 14px;
        color: #F26E22;
      }

      input {
        display: block;
      }

      input::placeholder {
        /* color: disableColor; */
        font-size: 14px;
      }
    }
  }
`;
