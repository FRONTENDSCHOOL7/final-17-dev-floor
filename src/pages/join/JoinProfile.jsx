import React from "react";
import { Body, Inner, Main, Profile } from "./JoinProfileStyle";
import profileImg from "../../assets/images/Group 26.png";

export default function JoinProfile() {
  return (
    <Body>
      <Inner>
        <Main>
          <Profile>
            <h2>프로필 설정</h2>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
          </Profile>
          <button className="upload-img">
            <img src={profileImg} alt="" />
          </button>
          <form>
            <div>
              <label>사용자 이름</label>
              <input type="text" placeholder="2~10자 이내여야 합니다." />
            </div>
            <div>
              <label>계정 ID</label>
              <input
                type="text"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              />
            </div>
            <div>
              <label>소개</label>
              <input
                type="text"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              />
            </div>
            <div className="profileSubmit">
              <button type="button">
                감귤마켓 시작하기
              </button>
            </div>
          </form>
        </Main>
      </Inner>
    </Body>
  );
}
