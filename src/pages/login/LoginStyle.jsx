import styled from "styled-components";

export const LoginWrap = styled.div`
  font-family: "GongGothicMedium";
  background: #eff0fd;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginInner = styled.div`
  background: var(--whiteColor);
  height: 100%;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
  /* display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; */
`;
export const LoginTit = styled.div`
  margin: auto;
  h2 {
    color: var(--bgColor);
    text-align: center;
  }
`;
export const LoginForm = styled.form`
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
export const Submit = styled.div`
  margin-top: 30px;
  button {
    width: 100%;
    height: 44px;
    color: var(--whiteColor);
    border-radius: 20px;
  }
`;
export const LoginEmail = styled.div`
  a {
    text-align: center;
    display: block;
  }
`;
