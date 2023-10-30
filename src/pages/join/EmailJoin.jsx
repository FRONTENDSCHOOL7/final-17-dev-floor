import { useRecoilState } from "recoil";
import { joinApi, profileImgApi, validateAccount, validateEmail } from "../../api/AuthApi";
import { btnDisableState, contentState, errorPwState, errorRegexState, errorState, idRegexErrorState, idRegexState, idValidErrorState, imageState, joinBtnDisableState, preDataState, profileImgState } from "../../state/AuthAtom";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Email, JoinForm, JoinInner, JoinTit, JoinWrap, Password, Submit,Body, Inner, Main, Profile } from './JoinStyle'
import { nameValidState } from "../../state/ModifyAtom";
import { imageApi, postApi } from "../../api/PostApi";
import upload from "../../assets/images/upload-file.png";

export function EmailJoin({ preData, setPreData, handleJoin}) {
    const [btnDisable, setBtnDisable] = useRecoilState(btnDisableState)
    const [error, setError] = useRecoilState(errorState)
    const [passLengthError, setPassLengthError] = useRecoilState(errorPwState)
    

    const newEmail = async (e) => {
        setPreData({...preData, email: e.target.value});
    };
    const newPassword = (e) => {
        setPreData({...preData, password: e.target.value});
    };
    const emailBlur = async () => {
        const isEmailValid = await validateEmail(preData.email);
        if (!isEmailValid) {
            setError('*이미 가입된 이메일 주소 또는 이메일형식이 올바르지 않습니다.');
            setBtnDisable(true)
        } else {
            setError(null);
            setBtnDisable(false)
        }
    }
    // const emailFormatCheck = (e) => {
    //     const regex = /^[a-zA-Z0-9._]+$/;
    //     if(!regex.test(e.target.value)) {
    //         setEmailRegexError('*이메일 형식이 올바르지 않습니다.');
    //     } else {
    //         setEmailRegexError(null);
    //     }
    // };
    const passwordBlur = (e) => {
        const pw = e.target.value
        if(pw.length < 7) {
            setPassLengthError('*비밀번호는 7자 이상이어야 합니다.')
            setBtnDisable(true)
            return
        } else {
            setPassLengthError(null)
            setBtnDisable(false)
        }
    }
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
            <input value={preData.email} onBlur={emailBlur} onChange={newEmail} type="email" id="email"/>
        </Email>
        {error && <div><p>{error}</p></div>}
        <Password>
            <span>비밀번호</span>
            <label htmlFor="password"></label>
            <input value={preData.password} onBlur={passwordBlur}onChange={newPassword}  type="password" id="password"/>
        </Password>
        {passLengthError && <div><p>{passLengthError}</p></div>}
        <Submit onClick={handleJoin}
                disabled={btnDisable}
                style={{ backgroundColor: btnDisable ? 'var(--bgColor)' : 'var(--disableColor)' }}
                >
            다음
        </Submit>
        </JoinForm>
    </JoinInner>
    </JoinWrap>
)
}