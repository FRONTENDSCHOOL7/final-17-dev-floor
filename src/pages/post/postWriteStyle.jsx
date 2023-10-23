import styled from "styled-components";

export const Body = styled.div`
  height: 844px;
  width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
    }
    textarea {
      display: block;
      margin-top: 7px;
      width: 100%;
      height: 700px;
      border-color: white;
    }
    textarea::placeholder {
      color: #c4c4c4;
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
