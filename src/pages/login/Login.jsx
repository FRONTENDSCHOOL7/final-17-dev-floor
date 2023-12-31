import React from "react";
import {
  Email,
  LoginEmail,
  LoginForm,
  LoginInner,
  LoginTit,
  LoginWrap,
  Password,
  Submit,
} from "./LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../api/AuthApi";
import { useRecoilState } from "recoil";
import {
  accountNameState,
  emailState,
  errorState,
  passwordState,
  tokenState,
  myProfileImage,
  postMyAhtuorIdState,
} from "../../state/AuthAtom";

export default function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [pwError, setPwError] = useRecoilState(errorState);
  const [emError, setEmError] = useRecoilState(errorState);
  const [token, setToken] = useRecoilState(tokenState);
  const [account, setAccount] = useRecoilState(accountNameState);
  const [image, setImage] = useRecoilState(myProfileImage);
  const [myAuthorId, setMyAuthorId] = useRecoilState(postMyAhtuorIdState)

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await loginApi(email, password);
        console.log(response);

        if (!response.user) {
          setPwError("*이메일 또는 비밀번호가 일치하지 않습니다.");
        } else {
          setEmError("");
          setPwError("");
        }
        const userAcount = response.user.accountname;
        localStorage.setItem("account", userAcount);
        setAccount(localStorage.getItem("account"));

        const userToken = response.user.token;
        localStorage.setItem("token", userToken);
        setToken(localStorage.getItem("token"));
        console.log(userToken);

        const userImage = response.user.image;
        localStorage.setItem("image", userImage);
        setImage(localStorage.getItem("image"));

        const userAuthorId = response.user._id
        localStorage.setItem('myAhthorId', userAuthorId)
        setMyAuthorId(localStorage.getItem('myAhthorId'))

        console.log('마이아이디',userAuthorId)

        navigate("/homefeed");
      } catch (error) {
        console.log("에러입니다.");
      }
  };
  const loginDisabled = !email || !password;

  return (
    <LoginWrap>
      <LoginInner>
        <LoginTit>
          <h2>로그인</h2>
        </LoginTit>
        <LoginForm onSubmit={handleLogin}>
          <Email>
            <span>이메일</span>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          </Email>
          <Password>
            <span>비밀번호</span>
            <label htmlFor='password'></label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePassword}
            />
          </Password>
          {pwError && (
            <div>
              <p>{pwError}</p>
            </div>
          )}
          <Submit>
            <button
              onClick={handleLogin}
              disabled={loginDisabled}
              style={{
                backgroundColor: loginDisabled
                  ? "var(--disableColor)"
                  : "var(--bgColor)",
              }}
            >
              로그인
            </button>
          </Submit>
        </LoginForm>
        <LoginEmail>
          <Link to='/join'>이메일로 회원가입</Link>
        </LoginEmail>
      </LoginInner>
    </LoginWrap>
  );
}
