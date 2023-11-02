import styled from "styled-components";

export const Body = styled.div`
  max-width: 720px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 12px;
  font-family: "GongGothicMedium";
  overflow: auto; // 내용이 요소의 박스를 벗어날 때 스크롤바 추가
`;

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

export const Sect1 = styled.div`
  max-width: 720px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "GongGothicMedium";
  overflow: auto; // 내용이 요소의 박스를 벗어날 때 스크롤바 추가
`;

export const Chat1 = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  font-family: "GongGothicMedium";
  position: relative; // 부모 요소에 position: relative 추가

  img {
    margin-top: 5px;
    padding: 10px 10px 10px 10px;
    width: 42px;
    height: 42px;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 12px;
    height: 12px;
    background-color: #7A8CCB;
    border-radius: 50%;
    z-index: 1;
  }

  div {
    margin-top: 15px;
    width: 600px;
    height: auto;
    line-height: 1.2;
    color: #000000;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  .contents {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-word;
    margin-right: 10px;
    font-size: 12px;
  }

  .text {
    display: flex;
    justify-content: space-between;
  }

  .date {
    display: flex;
    justify-content: space-between;
    color: #a6a6a6;
    font-size: 10px;
    position: absolute;
    right: 20px; // 기본 위치 설정
    transition: right 0.1s ease-in-out; // 부드러운 이동 효과를 위한 transition 추가

    @media (max-width: 720px) {
      right: calc(50% - 220px); // 화면 크기가 720px 이하일 때 위치 조정
    }
  }
`;

export const Chat2 = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  font-family: "GongGothicMedium";
  position: relative; // 부모 요소에 position: relative 추가

  img {
    margin-top: 5px;
    padding: 10px 10px 10px 10px;
    width: 42px;
    height: 42px;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 12px;
    height: 12px;
    background-color: #7A8CCB;
    border-radius: 50%;
    z-index: 1;
  }

  div {
    margin-top: 15px;
    width: 600px;
    height: auto;
    line-height: 1.2;
    color: #000000;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  .contents {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-word;
    margin-right: 10px;
    font-size: 12px;
  }

  .text {
    display: flex;
    justify-content: space-between;
  }

  .date {
    display: flex;
    justify-content: space-between;
    color: #a6a6a6;
    font-size: 10px;
    position: absolute;
    right: 20px; // 기본 위치 설정
    transition: right 0.1s ease-in-out; // 부드러운 이동 효과를 위한 transition 추가

    @media (max-width: 720px) {
      right: calc(50% - 220px); // 화면 크기가 720px 이하일 때 위치 조정
    }
  }
`;

export const Chat3 = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  font-family: "GongGothicMedium";
  position: relative; // 부모 요소에 position: relative 추가

  img {
    margin-top: 5px;
    padding: 10px 10px 10px 10px;
    width: 42px;
    height: 42px;
  }

  div {
    margin-top: 15px;
    width: 600px;
    height: auto;
    line-height: 1.2;
    color: #000000;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  .contents {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-word;
    margin-right: 10px;
    font-size: 12px;
  }

  .text {
    display: flex;
    justify-content: space-between;
  }

  .date {
    display: flex;
    justify-content: space-between;
    color: #a6a6a6;
    font-size: 10px;
    position: absolute;
    right: 20px; // 기본 위치 설정
    transition: right 0.1s ease-in-out; // 부드러운 이동 효과를 위한 transition 추가

    @media (max-width: 720px) {
      right: calc(50% - 220px); // 화면 크기가 720px 이하일 때 위치 조정
    }
  }
`;
