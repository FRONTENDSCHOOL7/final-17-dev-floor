import React from 'react'
import { Email, LoginEmail, LoginForm, LoginInner, LoginTit, LoginWrap, Password, Submit } from './LoginStyle'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../api/authApi'
import { useRecoilState } from 'recoil'
import { emailState, errorState, pwState, tokenState } from '../../state/LoginAtom'

export default function Login() {
    const [email, setEmail] = useRecoilState(emailState)
    const [pw, setPw] = useRecoilState(pwState)
    const [error, setError] = useRecoilState(errorState)
    const [token, setToken] = useRecoilState(tokenState)

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlepw = (e) => {
        setPw(e.target.value)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const response = await loginApi(email,pw)
            console.log(response)
            
            if(!response.user) {
                setError("*이메일  또는 비밀번호가 일치하지 않습니다.")
            }
            const userToken = response.user.token
            setToken(userToken)
            localStorage.setItem('token',userToken)
            navigate('/home')
        } catch (error) {
            console.log("에러입니다.")
        }
    }
    const loginDisabled = !email || !pw
    return (
        <LoginWrap>
            <LoginInner>
                <LoginTit>
                    <h2>로그인</h2>
                </LoginTit>
                <LoginForm onSubmit={handleLogin}>
                    <Email>
                        <span>이메일</span>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" value={email} onChange={handleEmail}/>
                    </Email>
                    <Password>
                        <span>비밀번호</span>
                        <label htmlFor="pw"></label>
                        <input type="pw" id="pw" value={pw} onChange={handlepw}/>
                    </Password>
                    {error && <div><p>{error}</p></div>}
                    <Submit>
                        <button 
                            onClick={handleLogin}
                            disabled={loginDisabled}
                            style={{ backgroundColor: loginDisabled ? 'var(--disableColor)' : 'var(--bgColor)' }}
                            >로그인</button>
                    </Submit>
                </LoginForm>
                <LoginEmail>
                    <Link to="/join">이메일로 회원가입</Link>
                </LoginEmail>
            </LoginInner>
        </LoginWrap>
        )
    }
