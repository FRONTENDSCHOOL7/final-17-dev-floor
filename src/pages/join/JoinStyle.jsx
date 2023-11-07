import styled from "styled-components";

export const JoinWrap = styled.div`
  font-family: "GongGothicMedium";
  background: #eff0fd;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const JoinInner = styled.div`
  background: var(--whiteColor);
  height: 100%;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
`;
export const JoinTit = styled.div`
  margin: auto;
  text-align: center;
  h2 {
    color: var(--bgColor);
  }
`;
export const JoinForm = styled.form`
  width: 100%;
  padding: 30px 0;
  p {
    padding-top: 6px;
    color: var(--errorFontColor);
    font-size: 0.8rem;
  }
`;
export const Email = styled.div`
  span {
    display: block;
    font-size: 0.8rem;
    color: var(--fontColor);
  }
  input {
    border-bottom: 1px solid var(--borderColor);
  }
  input:focus {
    border-bottom: 1px solid var(--focusColor);
  }
`;
export const Password = styled.div`
  margin-top: 16px;
  span {
    display: block;
    font-size: 0.8rem;
    color: var(--fontColor);
  }
  input {
    border-bottom: 1px solid var(--borderColor);
  }
  input:focus {
    border-bottom: 1px solid var(--focusColor);
  }
`;
export const Submit = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 44px;
  background: var(--disableColor);
  border-radius: 20px;
  color: var(--whiteColor);
`;

export const Body = styled.div`
  font-family: "GongGothicMedium";
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Inner = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  height: 100vh;
  background-color: #fff;
  div p.error {
    padding-top: 6px;
    color: var(--errorFontColor);
    font-size: 0.8rem;
  }
  .upload-img,
  .profileImg img {
    border-radius: 50%;
    position: relative;
    width: 110px;
    height: 110px;
    display: block;
    margin: auto;
  }
  .profile-img {
    display: inline-block;
    background-size: 36px 36px;
  }
  .write-bottom {
    position: relative;
  }
  .send {
    position: absolute;
    bottom: 0;
    right: 41%;
    width: 36px;
    img {
      width: 100%;
    }
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
        font-family: "GongGothicMedium";

        font-size: 12px;
        font-weight: 500;
      }
      input::placeholder {
        font-family: "GongGothicMedium";

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
      p {
        padding-top: 6px;
        color: var(--errorFontColor);
        font-size: 0.8rem;
      }
    }
    .profileSubmit {
      padding-top: 30px;
      button {
        background: var(--disableColor);
        width: 100%;
        height: 44px;
        border-radius: 20px;
        color: var(--whiteColor);
        margin: auto;
        max-width: 322px;
      }
    }
  }
`;
export const Profile = styled.div`
  text-align: center;
  h2 {
    margin-top: 30px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    color: var(--fontColor);
    padding: 12px 0 30px;
  }
`;
