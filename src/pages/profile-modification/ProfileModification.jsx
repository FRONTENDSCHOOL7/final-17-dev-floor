import React from "react";
import { Body, Main } from "./ProfileModificationStyle";
import profileImg from "../../assets/images/basic-profile-img-.png";
import TopBarSave from "../../components/topbar/TopBarSave";

export default function ProfileModification() {
  return (
    <Body>
      <TopBarSave />
      <Main>
        <img src={profileImg} alt="" />
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
        </form>
      </Main>
      <ul>
        <li>dd</li>
        <li>dd</li>
        <li>dd</li>
      </ul>
    </Body>
  );
}
