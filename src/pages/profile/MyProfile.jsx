import React, { useState } from "react";
import profileImg from "../../assets/images/Group 26.png";

import { ProImg, Intro, Body, Btns, Sect1 } from "./MyProfileStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";
import PostList from "../../components/postlist/PostList";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";

export default function MyProfile() {
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
          <Link to='/modify'>
            <button className='modify-btn'>프로필 수정</button>
          </Link>
          <Link to='/product'>
            <button className='register-btn'>상품 등록</button>
          </Link>
        </Btns>
      </Sect1>
      <Product />
      <PostList />
      <TabMenu />
    </Body>
  );
}
