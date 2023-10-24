import React from 'react'
import { Email, JoinForm, JoinInner, JoinTit, JoinWrap, Password, Submit } from './JoinStyle'
import { Link } from 'react-router-dom'

export default function Join() {
  return (
    <JoinWrap>
        <JoinInner>
            <JoinTit>
                <h2>이메일로 회원가입</h2>
            </JoinTit>
            <JoinForm>
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
                <Submit>
                    <Link to='/join-profile'>다음</Link>
                </Submit>
            </JoinForm>
        </JoinInner>
    </JoinWrap>
    )
}
