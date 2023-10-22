import styled from "styled-components";
import upload from "../../assets/images/upload-file.png";

export const Body = styled.div`
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
  /* .upload-img {
    width: 110px;
    height: 110px;
  }
  .upload-img::after {
    background: url(${upload}) no-repeat;
    content: "";
    display: inline-block;
    background-size: 36px 36px;
    height: 36px;
    width: 36px;
    margin: -50px 0px 30px 70px;
  } */
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;

    .product-desc {
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
      input {
        border: none;
        border-bottom: 1px solid #dbdbdb;
        margin-top: 10px;
        height: 22px;
      }
    }
    .img-container {
      display: flex;
      flex-direction: column;
      /* align-items: left; */
      width: 350px;
      height: 250px;
    }
    .img-background {
      background: var(--Gray-6, #f2f2f2);
      border-radius: 10px;
      border: 0.5px solid var(--DBDBDB, #dbdbdb);
      width: 322px;
      height: 204px;
    }
  }
`;
