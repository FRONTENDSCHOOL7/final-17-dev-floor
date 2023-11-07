import styled from "styled-components";

export const Body = styled.div`
  font-family: "GongGothicMedium";
  height: 100vh;
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Sect1 = styled.div`
  background: var(--bgColor);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 12px;
    border-style: none;
  }
  .upload {
    color: #fff;
    width: 90px;
    height: 32px;
    font-size: 14px;
    border: 1px solid var(--whiteColor);
    border-radius: 32px;
  }
`;

export const Sect2 = styled.div`
  height: 100%;
  background: var(--whiteColor);
  .write-main {
    height: 80%;
    padding: 12px;
    display: flex;
    gap: 10px;
    .profile-img {
      width: 42px;
      height: 42px;
      border-radius: 30px;
    }
    .writeBox {
      width: 100%;
    }
    input {
      font-family: "GongGothicMedium";

      display: block;
      margin-top: 7px;
      max-width: 720px;
      border-color: white;
      white-space: normal;
    }
    img {
      display: block;
      width: 304px;
      height: 228px;
    }
  }
  .write-bottom {
    padding-right: 16px;
    display: flex;
    justify-content: flex-end;
    button {
      width: 50px;
      height: 50px;
    }
  }
  .imageBox {
    display: flex;
    img {
      width: 210px;
      height: 150px;
    }
  }
`;
