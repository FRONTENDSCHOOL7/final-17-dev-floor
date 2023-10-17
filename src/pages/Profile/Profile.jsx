import React from "react";
import profileImg from "../../assets/images/basic-profile-img-.png";
import { ProImg, Intro } from "./ProfileStyle";

export default function Profile() {
  return (
    <>
      <ProImg>
        <div>
          <span>2950</span>
          <p>followers</p>
        </div>
        <img src={profileImg} alt="프로필 이미지" />
        <div>
          <span>128</span>
          <p>followings</p>
        </div>
      </ProImg>
      <Intro>
        <p>애월읍 위니브 감귤농장</p>
        <p>@ weniv_Mandarin</p>
        <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
      </Intro>
    </>
  );
}
