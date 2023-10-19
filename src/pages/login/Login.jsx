import React from 'react'
import { Email, LoginEmail, LoginForm, LoginInner, LoginTit, LoginWrap, Password, Submit } from './LoginStyle'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <LoginWrap>
        <LoginInner>
            <LoginTit>
                <h2>로그인</h2>
            </LoginTit>
            <LoginForm>
                <Email>
                    <span>이메일</span>
                    <label htmlFor="email"></label>
                    <input type="email" id="email"/>
                </Email>
                <Password>
                    <span>비밀번호</span>
                    <label htmlFor="password"></label>
                    <input type="password" id="password"/>
                </Password>
                <Submit><button type='submit'>로그인</button></Submit>
            </LoginForm>
            <LoginEmail>
                <Link to="/join">이메일로 회원가입</Link>
            </LoginEmail>
        </LoginInner>
    </LoginWrap>
  )
}
