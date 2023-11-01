import { useRecoilState } from "recoil";
import { joinApi, validateEmail } from "../../api/AuthApi";
import { errorState, idValidErrorState, preDataState } from "../../state/AuthAtom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EmailJoin } from "./EmailJoin";
import { ProfileJoin } from "./ProfileJoin";
import { validateAccount } from "../../api/ProfileApi";

export default function Join() {
const [preData, setPreData] = useRecoilState(preDataState);
const navigate = useNavigate();
const [isJoinPage, setIsJoinPage] = useState(true);
const [error, setError] = useRecoilState(errorState)
const [idValidError, setIdValidError] = useRecoilState(idValidErrorState)

// 이메일 다음 버튼
const handleJoin = async (e) => {
    e.preventDefault();
    const isEmailValid = await validateEmail(preData.email);
        if (isEmailValid === '이미 가입된 이메일 주소 입니다.') {
        setError('*이미 가입된 이메일 주소 입니다.');
        return
    } else if(isEmailValid === '사용 가능한 이메일 입니다.') {
        setError('')
        setPreData({
            ...preData,
            email: preData.email,
            password: preData.password,
        });
        setIsJoinPage(false);
    }
};
// 프로필 설정 시작하기
const submitJoin = async (e,image,accountname) => {
    e.preventDefault()
    const isAccountValid = await validateAccount(accountname)
    console.log(preData)
    if (isAccountValid === '이미 가입된 계정ID 입니다.') {
        setIdValidError('*이미 사용 중인 ID입니다.');
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

    navigate('/login')
    setPreData('')

    } catch (error) {
        console.log(error)
    }
};

return (
    <>
        {isJoinPage 
        ? <EmailJoin error={error} idValidError={idValidError} preData={preData} setPreData={setPreData} handleJoin={handleJoin} /> 
        : <ProfileJoin preData={preData} setPreData={setPreData} submitJoin={submitJoin} />
        }
    </>
    )
}




