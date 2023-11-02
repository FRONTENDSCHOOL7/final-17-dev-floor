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
  gap: 12px;
`;

export const Sect1 = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 12px;
    background: #fff;
    border-style: none;
  }
  .upload {
    color: #fff;
    width: 90px;
    height: 32px;
    font-size: 14px;
    background: #12184e;
    border-radius: 32px;
  }
`;

export const Sect2 = styled.div`
  .write-main {
    padding: 12px;
    display: flex;
    gap: 10px;
    .profile-img {
      width: 42px;
      height: 42px;
      border-radius: 30px;
    }
    .writeBox {
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
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    button {
      width: 50px;
      height: 50px;
    }
  }
`;
