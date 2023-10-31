import { useRecoilState } from "recoil";
import { joinApi, profileImgApi, validateEmail } from "../../api/AuthApi";
import {
  btnDisableState,
  contentState,
  errorPwState,
  errorRegexState,
  errorState,
  idRegexErrorState,
  idRegexState,
  idValidErrorState,
  imageState,
  joinBtnDisableState,
  preDataState,
  profileImgState,
  tokenState,
} from "../../state/AuthAtom";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Email,
  JoinForm,
  JoinInner,
  JoinTit,
  JoinWrap,
  Password,
  Submit,
  Body,
  Inner,
  Main,
  Profile,
} from "./JoinStyle";
import { nameValidState } from "../../state/ModifyAtom";
import { imageApi, postApi } from "../../api/PostApi";
import upload from "../../assets/images/upload-file.png";
import { EmailJoin } from "./EmailJoin";
import { ProfileJoin } from "./ProfileJoin";
import { validateAccount } from "../../api/ProfileApi";

export default function Join() {
  const [preData, setPreData] = useRecoilState(preDataState);
  const navigate = useNavigate();
  const [isJoinPage, setIsJoinPage] = useState(true); // 현재 페이지가 조인페이지인지 프로필페이지인지 결정하는 상태
  const [apiImage, setApiImage] = useState("");
  const [error, setError] = useRecoilState(errorState);
  const [idValidError, setIdValidError] = useRecoilState(idValidErrorState);

  const handleJoin = async (e) => {
    e.preventDefault();
    const isEmailValid = await validateEmail(preData.email);
    console.log(isEmailValid);
    if (isEmailValid === "이미 가입된 이메일 주소 입니다.") {
      setError("*이미 가입된 이메일 주소 또는 이메일형식이 올바르지 않습니다.");
      return;
    } else {
      setError(null);
      setPreData({
        ...preData,
        email: preData.email,
        password: preData.password,
      });
      setIsJoinPage(false);
    }
  };

  const submitJoin = async (e, image, accountname) => {
    e.preventDefault();
    const isAccountValid = await validateAccount(accountname);
    console.log(preData);
    if (!isAccountValid) {
      console.log(isAccountValid);
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
          image: preData.image,
        },
      };
      const response = await joinApi(joinProfileData);
      console.log(response);

      navigate("/login");
    } catch (error) {
      console.log(error);
      setIdValidError("*이미 사용 중인 ID입니다.");
    }
  };

  return (
    <>
      {isJoinPage ? (
        <EmailJoin
          error={error}
          idValidError={idValidError}
          preData={preData}
          setPreData={setPreData}
          handleJoin={handleJoin}
        />
      ) : (
        <ProfileJoin
          preData={preData}
          setPreData={setPreData}
          submitJoin={submitJoin}
        />
      )}
    </>
  );
}
