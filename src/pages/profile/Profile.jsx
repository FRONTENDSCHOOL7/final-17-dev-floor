import React from "react";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";
import share from "../../assets/images/icon-share.png";

import { ProImg, Intro, Body, Btns, Sect1 } from "./ProfileStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";
import Product from "../../components/product/Product";
import PostList from "../../components/postlist/PostList";
import PostAlbum from "../../components/postalbum/PostAlbum";

export default function Profile() {
  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <span className='followers'>2950</span>
            <p>followers</p>
          </button>
          <img src={profileImg} alt='프로필 이미지' />
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
            <img src={message} alt='' />
          </button>
          <button className='btn-follow'>팔로우</button>
          <button>
            <img src={share} alt='' />
          </button>
        </Btns>
      </Sect1>
      <Product />
      <PostList />
      <TabMenu />
    </Body>
  );
}
