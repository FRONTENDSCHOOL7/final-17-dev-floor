import { useRecoilState } from "recoil";
import { joinApi, profileImgApi, validateEmail, validateAccount } from "../../api/AuthApi";
import { btnDisableState, contentState, errorPwState, errorRegexState, errorState, idRegexErrorState, idRegexState, idState, idValidErrorState, imageState, joinBtnDisableState, preDataState, profileImgState } from "../../state/AuthAtom";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Email, JoinForm, JoinInner, JoinTit, JoinWrap, Password, Submit,Body, Inner, Main, Profile } from './JoinStyle'
import { nameValidState } from "../../state/ModifyAtom";
import { imageApi, postApi } from "../../api/PostApi";
import upload from "../../assets/images/upload-file.png";
// import { validateAccount } from "../../api/ProfileApi";
import profileDefault from "../../assets/images/Group 26.png";

export function ProfileJoin({ preData, setPreData, submitJoin,joinProfileData }) {
    const [nameValid, setNameValid] = useRecoilState(nameValidState)
    const [idValidError, setIdValidError] = useRecoilState(idValidErrorState)
    const [idRegexError, setIdRegexError] = useRecoilState(idRegexErrorState)
    const [joinBtnDisable, setjoinBtnDisable] = useRecoilState(joinBtnDisableState)
    const imgRef = useRef(null);
    const [image, setImage] = useRecoilState(profileImgState)
    const [apiImage, setApiImage] = useState('')
    const [id, setId] = useRecoilState(idState);


    const newUsername = (e) => {
        setPreData({ ...preData, username: e.target.value });

    }
    const newUsernameBlur = (e) => {
        const name = e.target.value
        if(name.length < 2 || name.length > 10) {
            setNameValid(false)
            setjoinBtnDisable(false)
        } else {
            setNameValid(true)
            setjoinBtnDisable(true)
        }
    }
    const regex = /^[a-zA-Z0-9._]+$/;

    const newAccountname = (e) => {
        setPreData({...preData, accountname: e.target.value})
        if(e.target.value === ''){
            setIdValidError('*ID를 입력해주세요.')
        } else if(!regex.test(e.target.value)) {
            setIdValidError('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.')
        } else {
            setIdValidError('');
        }
    } 
    const newAccountBlur = async (e) => {
        const isAccountValid = await validateAccount(preData.accountname);
        if(isAccountValid === '이미 가입된 계정ID 입니다.') {
            setIdValidError('*이미 사용 중인 ID입니다.');
            setjoinBtnDisable(false);
        } else if(!regex.test(e.target.value)) {
            setIdValidError('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.')
        } else {
            setIdValidError('');
            setjoinBtnDisable(true);
        }
    }

    const newIntro = (e) => {
        setPreData({...preData, intro: e.target.value})
    } 
const onChangeFile = async (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImage(reader.result);
    };
    // 이미지 api 필요 값 입력
    try {
        const result = await profileImgApi(file);
        console.log(result);
        // setApiImage("https://api.mandarin.weniv.co.kr/"+result.filename);
        setPreData({...preData, image: "https://api.mandarin.weniv.co.kr/"+result.filename})
        console.log("이미지다!!!!");
        } catch (error) {
        console.log(error);
        }
    };
    const onClickImage = (e) => {
        imgRef.current?.click(e.target.files?.[0]);
    };
return (
    <Body>
    <Inner>
        <Main>
        <Profile>
            <h2>프로필 설정</h2>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
        </Profile>
        <div className='write-main'>
            <form className='writeBox'>
                <label htmlFor="userImg"></label>
                <input
                id="userImg"
                style={{display:'none'}}
                type='file'
                onChange={onChangeFile}
                ref={imgRef}
                accept="image/*"
                />
                <div className="profileImg">
                    {image ? <img src={image}/> : <img src={setImage}/>}
                </div>
            </form>
            <div className='write-bottom'>
                <button className='send' onClick={onClickImage}>
                    <img src={upload} alt='' className='profile-img' />
                </button>
            </div>
        </div>
        <form>
            <div>
            <label>사용자 이름</label>
            <input value={preData.username} 
                onChange={newUsername}
                onBlur={newUsernameBlur}
                type="text" placeholder="2~10자 이내여야 합니다."/>
                {nameValid === null ? (
                    ""
                ) : nameValid ? (
                    ""
                ) : (
                    <p>이름이 올바르지 않습니다.</p>
                )
                }
            </div>
            <div>
            <label>계정 ID</label>
            <input
                value={preData.accountname}
                onBlur={newAccountBlur}
                onChange={newAccountname}
                type="text"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
            {idValidError && <p className="error">{idValidError}</p>}
            {/* {idRegexError === null ? (
                ""
                ) : idRegexError ? (
                ""
                ) : (
                <p className="error">*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</p>
            )} */}
            {/* {idRegexError && <div>{idRegexError}</div>} */}
            </div>
            <div>
            <label>소개</label>
            <input
                value={preData.intro} 
                onChange={newIntro} 
                type="text"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            />
            </div>
            <div className="profileSubmit">
            <button onClick={submitJoin} type="button"
                    disabled={!joinBtnDisable}
                    style={{ backgroundColor: joinBtnDisable ? 'var(--bgColor)' : 'var(--disableColor)' }}
            >
                개발바닥 시작하기
            </button>
            </div>
        </form>
        </Main>
    </Inner>
    </Body>
)
}
