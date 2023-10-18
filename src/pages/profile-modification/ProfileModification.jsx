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
          <label>사용자 이름</label>
          <input type="text" />
          <label>계정 ID</label>
          <input type="text" />
          <label>소개</label>
          <input type="text" />
        </form>
      </Main>
    </Body>
  );
}
