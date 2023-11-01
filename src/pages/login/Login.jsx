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
    emailState,
    errorState,
    passwordState,
    tokenState,
    accountNameState,
} from "../../state/AuthAtom";

export default function Login() {
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [error, setError] = useRecoilState(errorState);
    const [token, setToken] = useRecoilState(tokenState);
    const [account, setAccount] = useRecoilState(accountNameState);
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
            setError("*이메일  또는 비밀번호가 일치하지 않습니다.");
        }
        const userAcount = response.user.accountname;
        localStorage.setItem("account", userAcount);
        setAccount(localStorage.getItem("account"));
        // localStorage.setItem('token',userToken)
        navigate("/homefeed");

        const userToken = response.user.token;
        localStorage.setItem("token", userToken);
        setToken(localStorage.getItem("token"));
        console.log(userToken);  
        
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
            {error && (
                <div>
                <p>{error}</p>
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
