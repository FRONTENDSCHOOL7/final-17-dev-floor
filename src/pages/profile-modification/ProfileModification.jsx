import React from "react";
import { Body, Main } from "./ProfileModificationStyle";
import profileImg from "../../assets/images/Group 26.png";
import TopBarSave from "../../components/topbar/TopBarSave";
import { useRecoilState } from "recoil";
import { idState, introState, userNameState } from "../../state/ModifyAtom";

export default function ProfileModification() {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(idState);
  const [intro, setIntro] = useRecoilState(introState);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleIntroChange = (e) => {
    setIntro(e.target.value);
  };
  return (
    <Body>
      <TopBarSave />
      <Main>
        <button className='upload-img'>
          <img src={profileImg} alt='' />
        </button>
        <form>
          <div>
            <label>사용자 이름</label>
            <input
              type='text'
              placeholder='2~10자 이내여야 합니다.'
              onChange={handleNameChange}
              className={
                (userName.length > 0 && userName.length < 2) ||
                userName.length > 10
                  ? "error"
                  : "inp-name"
              }
            />
            <p>
              {(userName.length > 0 && userName.length < 2) ||
              userName.length > 10
                ? "이름이 올바르지 않습니다."
                : ""}
            </p>
          </div>
          <div>
            <label>계정 ID</label>
            <input
              type='text'
              placeholder='영문, 숫자, 특수문자 (.) ,(_) 만 사용 가능합니다.'
              onChange={handleIdChange}
            />
          </div>
          <div>
            <label>소개</label>
            <input
              type='text'
              placeholder='자신과 판매할 상품에 대해 소개해 주세요 !'
              onChange={handleIntroChange}
            />
          </div>
        </form>
      </Main>
    </Body>
  );
}
