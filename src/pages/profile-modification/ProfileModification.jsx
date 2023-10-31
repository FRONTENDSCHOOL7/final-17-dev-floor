import React, { useRef, useState } from "react";
import { Body, Main } from "./ProfileModificationStyle";
import profileImg from "../../assets/images/Group 26.png";
import TopBarSave from "../../components/topbar/TopBarSave";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  introState,
  userNameState,
  idValidState,
  nameValidState,
  apiImageState,
  profileImgState,
  accountState,
} from "../../state/ModifyAtom";
import TopBarModify from "../../components/topbar/TopBarModify";
import { editApi, validateAccount } from "../../api/ProfileApi";
import { Navigate, useNavigate } from "react-router-dom";
import { imageApi } from "../../api/PostApi";
import { tokenState } from "../../state/AuthAtom";

export default function ProfileModification() {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(accountState);
  const [intro, setIntro] = useRecoilState(introState);
  const [nameValid, setNameValid] = useRecoilState(nameValidState);
  const [idValid, setIdValid] = useRecoilState(idValidState);
  const [image, setImage] = useRecoilState(profileImgState);
  const [apiImage, setApiImage] = useRecoilState(apiImageState);
  const fileRef = useRef(null);
  const token = useRecoilValue(tokenState);

  const navigate = useNavigate();

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

  // 프로필 수정

  const handleEdit = async (e) => {
    e.preventDefault();
    const isAccountValid = await validateAccount(id);
    if (!isAccountValid) {
      alert("계정 유효성 검사에 오류가 발생했습니다.");
      return;
    }
    try {
      const res = await editApi(userName, id, intro, apiImage, token);
      console.log(res);
      navigate("/myprofile");
    } catch (error) {
      console.log("에러입니다.");
    }
  };

  // 이미지 업로드

  const onChangeFile = async (e) => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
    // 이미지 api 필요 값 입력
    try {
      const result = await imageApi(file);
      console.log(result);
      setApiImage("https://api.mandarin.weniv.co.kr/" + result.filename);
      console.log("성공했습니다");
      console.log(apiImage);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickImage = (e) => {
    fileRef.current?.click(e.target.files?.[0]);
  };

  return (
    <Body>
      <TopBarModify
        nameValid={nameValid}
        idValid={idValid}
        onEdit={handleEdit}
      />
      <Main>
        <input
          style={{ display: "none" }}
          type='file'
          onChange={onChangeFile}
          ref={fileRef}
        />

        <button className='upload-img' onClick={onClickImage}>
          {/* <img src={profileImg} alt='' /> */}
          {image ? <img src={image}></img> : <img src={profileImg}></img>}
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
              pattern='.{2,10}'
              required
              title='2글자 이상 열글자미만'
            />
          </div>
        </form>
      </Main>
    </Body>
  );
}
