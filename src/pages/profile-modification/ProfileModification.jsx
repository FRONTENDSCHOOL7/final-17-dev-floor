import React from "react";
import { Body, Main } from "./ProfileModificationStyle";
import profileImg from "../../assets/images/Group 26.png";
import TopBarSave from "../../components/topbar/TopBarSave";
import { useRecoilState } from "recoil";
import {
  idState,
  introState,
  userNameState,
  idValidState,
  nameValidState,
} from "../../state/ModifyAtom";
import TopBarModify from "../../components/topbar/TopBarModify";

export default function ProfileModification() {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(idState);
  const [intro, setIntro] = useRecoilState(introState);
  const [nameValid, setNameValid] = useRecoilState(nameValidState);
  const [idValid, setIdValid] = useRecoilState(idValidState);

  // 사용자 이름 함수
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleNameBlur = (e) => {
    const name = e.target.value;
    if (name.length < 2 || name.length > 10) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };
  // 사용자 이름 함수

  // 사용자 id 함수
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleIdBlur = (e) => {
    const userId = e.target.value;
    const regex = /^[A-Za-z0-9._]+$/;
    if (regex.test(userId)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  // 사용자 id 함수

  // 사용자 소개 함수
  const handleIntroChange = (e) => {
    setIntro(e.target.value);
  };

  // 사용자 소개 함수
  return (
    <Body>
      <TopBarModify nameValid={nameValid} idValid={idValid} />
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
              value={userName}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              className={
                nameValid === null
                  ? "inp-name"
                  : nameValid
                  ? "inp-name"
                  : "error"
              }
            />
            {nameValid === null ? (
              ""
            ) : nameValid ? (
              ""
            ) : (
              <p>이름이 올바르지 않습니다.</p>
            )}
          </div>
          <div>
            <label>계정 ID</label>
            <input
              type='text'
              placeholder='영문, 숫자, 특수문자 (.) ,(_) 만 사용 가능합니다.'
              onChange={handleIdChange}
              onBlur={handleIdBlur}
              className={
                idValid === null ? "inp-id" : idValid ? "inp-id" : "error"
              }
            />
            {idValid === null ? (
              ""
            ) : idValid ? (
              ""
            ) : (
              <p>id형식이 올바르지 않습니다.</p>
            )}
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
