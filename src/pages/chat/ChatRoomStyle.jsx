import styled from "styled-components";

export const Body = styled.div`
  font-family: "GongGothicMedium";
  max-width: 100vw; // 화면의 너비를 초과하지 않도록 설정
  height: 100vh; // 화면의 높이를 초과하지 않도록 설정
  width: 100%;
  display: flex;
  justify-content: center; // 가로축을 기준으로 중앙 정렬
  align-items: center; // 세로축을 기준으로 중앙 정렬
  flex-direction: column;
  font-family: "GongGothicMedium";
  overflow: hidden; // 초과하는 내용이 생겼을 때 스크롤바가 생기지 않도록 설정
`;

export const TopBarChat = styled.div`
  background: #12184e;
  max-width: 720px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  font-family: "GongGothicMedium";

  button {
    width: 22px;
    height: 22px;
    margin: 13px 16px;
    border-style: none;
  }

  h2 {
    transform: translateY(-15%);
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
`;

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
    border: 1px solid #7a8ccb;
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
    color: #a6a6a6;
    font-size: 10px;
  }
`;

export const ChatBar = styled.div`
  position: fixed; // 위치 고정
  bottom: 0; // 화면 하단에 위치
  width: 100%; // 너비를 화면 너비와 같게 설정
  max-width: 720px; // 최대 너비 설정
  margin: 0 auto; // 중앙 정렬
  background: #fff;

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
      padding-right: 10px; // '전송' 버튼과 화면 가장자리 사이에 간격 추가
      display: flex;
      align-items: center;

      // input 요소에 가능한 많은 공간을 부여
      // '전송' 버튼은 오른쪽에 고정된 공간을 유지
      input {
        flex-grow: 1;
        display: block;
      }

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
        color: #f26e22;
      }
    }

    input {
      color: #c4c4c4; // 기본 상태에서의 폰트 색상
      display: block;

      // 사용자가 입력을 시작하면 폰트 색상 변경
      &:focus {
        color: #000000;
      }
    }

    input::placeholder {
      font-family: "GongGothicMedium";
      color: #dbdbdb;
    }
  }
`;
