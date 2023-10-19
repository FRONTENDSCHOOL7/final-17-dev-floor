import styled from "styled-components";
import upload from "../../assets/images/upload-file.png";

export const Body = styled.div`
  border: 3px solid royalblue;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  img {
    width: 110px;
    height: 110px;
  }
  img::after {
    background-image: url(${upload});
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
    }
  }
`;
