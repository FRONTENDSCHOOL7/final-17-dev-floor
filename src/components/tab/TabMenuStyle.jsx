import styled from "styled-components";

export const Tab = styled.div`
  background-color: #fff;
  max-width: 720px;
  width: 100%;
  display: flex;
  max-height: 60px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  button {
    background: #fff;
    border-style: none;
    margin-top: 10px;
    position: relative;
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      font-family: "GongGothicMedium";
    }
  }
`;
