import styled from "styled-components";

export const Sect1 = styled.div`
  .container {
  position: fixed; // 위치 고정
  bottom: 0; // 화면 하단에 위치
  left: 50%; // 좌우 위치를 화면 중앙에 위치
  transform: translateX(-50%); // Modal의 중심을 화면 중심과 일치시킴
  width: 100%; // 화면 너비에 따라 크기가 변하도록
  height: 110px;
  z-index: 999;
  background-color: white;
  border: 0.5px solid var(--DBDBDB, #dbdbdb);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px; // 최대 너비 설정
  }

  .barr {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  }

  .letter {
  width: 100%;
  height: calc(100% - 30px);
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  padding-left: 5%; // 상대적 단위로 변경
  }
`;
