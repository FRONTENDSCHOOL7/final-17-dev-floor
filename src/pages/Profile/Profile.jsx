import React from "react";
import profileImg from "../../assets/images/basic-profile-img-.png";
import message from "../../assets/images/icon-message-circle.png";
import share from "../../assets/images/icon-share.png";
import hamburger from "../../assets/images/icon-post-list-off.png";
import album from "../../assets/images/icon-post-album-off.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import back from "../../assets/images/icon-arrow-left.png";

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
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";

export default function Profile() {
  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <span>2950</span>
            <p>followers</p>
          </button>
          <img src={profileImg} alt="프로필 이미지" />
          <button>
            <span>128</span>
            <p>followings</p>
          </button>
        </ProImg>
        <Intro>
          <h2>애월읍 위니브 감귤농장</h2>
          <p>@ weniv_Mandarin</p>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Intro>
        <Btns>
          <button>
            <img src={message} alt="" />
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
        {/* 게시글 목록 */}
        <div className="content-container">
          {/* 게시글 한개 */}
          <div className="content-list">
            <img src={profileImg} alt="" className="profile-img" />
            <div className="content">
              <div className="content-title">
                <div className="content-id">
                  <h3>애월읍 위니브 감귤농장</h3>
                  <p>@ weniv_Mandarin</p>
                </div>
                <div>
                  <button>
                    <img src={more} alt="" />
                  </button>
                </div>
              </div>
              <div className="content-inner">
                <p>
                  옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                  뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고,
                  못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                </p>
                <img src="https://via.placeholder.com/304x228" alt="" />
              </div>
              <div className="like-comment">
                <button>
                  <img src={like} alt="" /> <span>58</span>
                </button>
                <button>
                  <img src={message} alt="" /> <span>12</span>
                </button>
              </div>
              <span className="date">2020년 10월 21일</span>
            </div>
          </div>
          {/* //게시글 한개 */}
          {/* 게시글 한개 */}
          <div className="content-list">
            <img src={profileImg} alt="" className="profile-img" />
            <div className="content">
              <div className="content-title">
                <div className="content-id">
                  <h3>애월읍 위니브 감귤농장</h3>
                  <p>@ weniv_Mandarin</p>
                </div>
                <div>
                  <button>
                    <img src={more} alt="" />
                  </button>
                </div>
              </div>
              <div className="content-inner">
                <p>
                  옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                  뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고,
                  못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                </p>
                <img src="https://via.placeholder.com/304x228" alt="" />
              </div>
              <div className="like-comment">
                <button>
                  <img src={like} alt="" /> <span>58</span>
                </button>
                <button>
                  <img src={message} alt="" /> <span>12</span>
                </button>
              </div>
              <span className="date">2020년 10월 21일</span>
            </div>
          </div>
          {/* //게시글 한개 */}
        </div>
      </Sect3>
      <TabMenu />
    </Body>
  );
}
