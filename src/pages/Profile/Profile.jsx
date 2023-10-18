import React from "react";
import profileImg from "../../assets/images/basic-profile-img-.png";
import kakao from "../../assets/images/icon-message-circle.png";
import share from "../../assets/images/icon-share.png";
import hamburger from "../../assets/images/icon-post-list-off.png";
import album from "../../assets/images/icon-post-album-off.png";

import {
  ProImg,
  Intro,
  Body,
  Btns,
  Sect1,
  Sect2,
  Sale,
  Sect3,
} from "./ProfileStyle";

export default function Profile() {
  return (
    <Body>
      <Sect1>
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
          <h2>애월읍 위니브 감귤농장</h2>
          <p>@ weniv_Mandarin</p>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Intro>
        <Btns>
          <button>
            <img src={kakao} alt="" />
          </button>
          <button className="btn-follow">팔로우</button>
          <button>
            <img src={share} alt="" />
          </button>
        </Btns>
      </Sect1>
      <Sect2>
        <h2>판매중인 상품</h2>
        <Sale>
          <div>
            <img src="https://via.placeholder.com/140x90" alt="" />
            <p>애월읍 노지 감귤</p>
            <span>35,000원</span>
          </div>
          <div>
            <img src="https://via.placeholder.com/140x90" alt="" />
            <p>애월읍 노지 감귤</p>
            <span>35,000원</span>
          </div>
          <div>
            <img src="https://via.placeholder.com/140x90" alt="" />
            <p>애월읍 노지 감귤</p>
            <span>35,000원</span>
          </div>
        </Sale>
      </Sect2>
      <Sect3>
        <div className="album-btns">
          <button>
            <img src={hamburger} alt="" />
          </button>
          <button>
            <img src={album} alt="" />
          </button>
        </div>
      </Sect3>
    </Body>
  );
}
