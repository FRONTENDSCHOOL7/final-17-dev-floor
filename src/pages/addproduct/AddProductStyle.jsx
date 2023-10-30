import styled from "styled-components";

export const Body = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }
  .img-container {
    display: flex;
    flex-direction: column;
    p {
      font-family: Spoqa Han Sans Neo;
      font-size: 12px;
      font-weight: 400;
      color: var(--767676, #767676);
      margin-bottom: 18px;
    }

  .img-background {
    border-radius: 10px;
    border: 0.5px solid var(--DBDBDB, #dbdbdb);
    background: var(--Gray-6, #DBDBDB);
    width: 322px;
    height: 204px;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    button {
      width: 36px;
      height: 36px;
      margin-right: 12px;
      margin-bottom: 12px;
    }
    input {
      display: none;
    }
    .previewimage {
      /* position: relative; */
      width: 322px;
      height: 204px;
      display: flex;
      align-items: flex-end;
      justify-content: end;
    }
    .buttonbox {
      position: absolute;
    }
  }
  }
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
`;
