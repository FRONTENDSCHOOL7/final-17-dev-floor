import styled from "styled-components";

export const Body = styled.div`
  /* border: 3px dashed gray; */
  font-family: "GongGothicMedium";
  max-width: 720px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 12px;
  font-family: "GongGothicMedium";
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "GongGothicMedium";
`;

export const Chat1 = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  font-family: "GongGothicMedium";

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
    /* justify-content: space-between; */
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
  }
`;
