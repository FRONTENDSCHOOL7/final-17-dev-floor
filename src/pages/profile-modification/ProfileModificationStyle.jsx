import styled from "styled-components";
import upload from "../../assets/images/upload-file.png";

export const Body = styled.div`
  background: var(--whiteColor);
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "GongGothicMedium";
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  .upload-img {
    width: 110px;
    height: 110px;
    img {
      border-radius: 100px;
    }
  }
  .upload-img::after {
    background: url(${upload}) no-repeat;
    content: "";
    display: inline-block;
    background-size: 36px 36px;
    height: 36px;
    width: 36px;
    margin: -50px 0px 30px 70px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
    div {
      display: flex;
      flex-direction: column;
      margin-left: 34px;
      margin-right: 34px;
      margin-bottom: 34px;
      label {
        font-size: 12px;
        font-weight: 500;
      }
      input::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: var(--DBDBDB, #dbdbdb);
        font-family: "GongGothicMedium";
      }
      input {
        border: none;
        border-bottom: 1px solid #dbdbdb;
        margin-top: 10px;
        height: 22px;
      }
      .error {
        border-bottom: 1px solid red;
      }
      p {
        color: red;
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
`;
