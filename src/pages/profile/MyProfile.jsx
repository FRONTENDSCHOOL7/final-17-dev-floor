import React, { useEffect, useState } from "react";
import profileImg from "../../assets/images/Group 26.png";
import hamburgerOn from "../../assets/images/icon-post-list-on.png";
import hamburgerOff from "../../assets/images/icon-post-list-off.png";
import albumOn from "../../assets/images/icon-post-album-on.png";
import albumOff from "../../assets/images/icon-post-album-off.png";

import { ProImg, Intro, Body, Btns, Sect1 } from "./MyProfileStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";
import PostList from "../../components/postlist/PostList";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";
import PostAlbum from "../../components/postalbum/PostAlbum";
import { myInfoProfileApi } from "../../api/ProfileApi";

export default function MyProfile() {
  const [hamburgerBtn, setHamburgerBtn] = useState(true);
  const [myProfile, setMyProfile] = useState(null);

  useEffect(() => {
      const MyProfile = async () => {
          const data = await myInfoProfileApi()
          console.log(data.user);  
          setMyProfile(data.user);
          // setMyProfile(data)
      }
      MyProfile()
  }, []);

  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };
  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <Link to='/followers'>
              <span className='followers'>{myProfile && myProfile.followerCount}</span>
              <p>followers</p>
            </Link>
          </button>
          <img src={profileImg} alt='프로필 이미지' />
          <button>
            <Link to='/following'>
              <span>128</span>
              <p>followings</p>
            </Link>
          </button>
        </ProImg>
        <Intro>
          <h2>{myProfile && myProfile.username}</h2>
          <p>@ {myProfile && myProfile.accountname}</p>
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
      <div className='album-btns'>
        <button onClick={showPost}>
          <img src={hamburgerBtn ? hamburgerOn : hamburgerOff} alt='' />
        </button>
        <button onClick={showPost}>
          <img src={hamburgerBtn ? albumOff : albumOn} alt='' />
        </button>
      </div>
      {hamburgerBtn ? <PostList /> : <PostAlbum />}
      <TabMenu />
    </Body>
  );
}