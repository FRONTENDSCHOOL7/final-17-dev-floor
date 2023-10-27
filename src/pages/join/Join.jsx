import { useRecoilState } from "recoil";
import { joinApi, validateAccount } from "../../api/AuthApi";
import { preDataState } from "../../state/AuthAtom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Email, JoinForm, JoinInner, JoinTit, JoinWrap, Password, Submit,Body, Inner, Main, Profile } from './JoinStyle'

export default function Join() {
const [preData, setPreData] = useRecoilState(preDataState);
const navigate = useNavigate();
const [isJoinPage, setIsJoinPage] = useState(true);  // 현재 페이지가 조인페이지인지 프로필페이지인지 결정하는 상태

const handleJoin = (e) => {
    e.preventDefault();
    setPreData({
    ...preData,
    email: preData.email,
    password: preData.password,
    });
    setIsJoinPage(false);  
};

const submitJoin = async () => {
    const isAccountValid = await validateAccount(preData.accountname)
    if (!isAccountValid) {
        alert('이미 사용중인 계정입니다.');
        return;
    }
    try {
        const joinProfileData = {
        user: {
            email: preData.email,
            password: preData.password,
            username: preData.username,
            accountname: preData.accountname,
            intro: preData.intro,
            image: preData.image
        }
    }
    const response = await joinApi(joinProfileData)
    console.log(response)
    navigate('/home')
    } catch (error) {
    // '이미 가입된 이메일입니다.' 에러 메시지가 반환되면 무시하고 다음 단계로 넘어감
    if (error.message !== '이미 가입된 이메일 주소 입니다.') {
        console.log(error);
    }
    }
};

return (
    <>
        {isJoinPage 
        ? <JoinPage preData={preData} setPreData={setPreData} handleJoin={handleJoin} /> 
        : <ProfilePage preData={preData} setPreData={setPreData} submitJoin={submitJoin} />
        }
    </>
)
}

export function JoinPage({ preData, setPreData, handleJoin }) {
const newEmail = (e) => {
    setPreData({...preData, email: e.target.value});
};
const newPassword = (e) => {
    setPreData({...preData, password: e.target.value});
};

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
            <input value={preData.email} onChange={newEmail} type="email" id="email"/>
        </Email>
        <Password>
            <span>비밀번호</span>
            <label htmlFor="password"></label>
            <input value={preData.password} onChange={newPassword}  type="password" id="password"/>
        </Password>
        <Submit onClick={handleJoin}>
            <Link to=''>다음</Link>
        </Submit>
        </JoinForm>
    </JoinInner>
    </JoinWrap>
)
}

export function ProfilePage({ preData, setPreData, submitJoin }) {
const newUsername = (e) => {
    setPreData({ ...preData, username: e.target.value });
    }
    const newAccountname = (e) => {
    setPreData({...preData, accountname: e.target.value})
    } 
    const newIntro = (e) => {
    setPreData({...preData, intro: e.target.value})
    } 
    const uploadImg = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/'
    const reqUrl = baseUrl+'/image/uploadfile'
    // 폼데이터 만들기
    const form = new FormData()
    // 폼데이터 값 추가
    // formData.append('키','값')
    form.append('image', imageFile)
    // 폼바디에 넣어서 요청
    const res = await fetch(reqUrl,{
        method: 'POST',
        body: form
    })
    const json = await res.json()
    const imgUrl = baseUrl+json.filename
    setPreData({...preData, image: imgUrl})
}
const onChangeImg = (e) => {

    const imageFile = e.target.files[0]
    uploadImg(imageFile)
}
return (
    <Body>
    <Inner>
        <Main>
        <Profile>
            <h2>프로필 설정</h2>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
        </Profile>
        <label htmlFor="profileImg" className="upload-img">
            <img src={preData.image} alt="" />
        </label>
        <input type="file" onChange={onChangeImg} id="profileImg"  name="image" accept="image/*"/>
        <form>
            <div>
            <label>사용자 이름</label>
            <input value={preData.username} onChange={newUsername}type="text" placeholder="2~10자 이내여야 합니다." />
            </div>
            <div>
            <label>계정 ID</label>
            <input
                value={preData.accountname}
                onChange={newAccountname}
                type="text"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
            </div>
            <div>
            <label>소개</label>
            <input
                value={preData.intro} onChange={newIntro} 
                type="text"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            />
            </div>
            <div className="profileSubmit">
            <button onClick={submitJoin} type="button">
                개발바닥 시작하기
            </button>
            </div>
        </form>
        </Main>
    </Inner>
    </Body>
)
}

