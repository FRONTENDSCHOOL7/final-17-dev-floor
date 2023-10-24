import React, { useState, useEffect } from "react";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";
import share from "../../assets/images/icon-share.png";
import hamburgerOn from "../../assets/images/icon-post-list-on.png";
import hamburgerOff from "../../assets/images/icon-post-list-off.png";
import albumOn from "../../assets/images/icon-post-album-on.png";
import albumOff from "../../assets/images/icon-post-album-off.png";
import { ProImg, Intro, Body, Btns, Sect1 } from "./ProfileStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import TabMenu from "../../components/tab/TabMenu";
import Product from "../../components/product/Product";
import PostList from "../../components/postlist/PostList";
import PostAlbum from "../../components/postalbum/PostAlbum";
import { Link } from "react-router-dom";

export default function Profile() {
  const [follow, setFollow] = useState(localStorage.getItem(false));
  const [hamburgerBtn, setHamburgerBtn] = useState(true);

  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };

  const checkFollow = () => {
    setFollow(!follow);
    localStorage.setItem("isFollowed", !follow);
  };
  useEffect(() => {
    const storedIsFollowed = localStorage.getItem("isFollowed");
    if (storedIsFollowed) {
      setFollow(storedIsFollowed === "true");
    }
  }, []);
  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <Link to='/followers'>
              <span className='followers'>2950</span>
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
          <h2>애월읍 위니브 감귤농장</h2>
          <p>@ weniv_Mandarin</p>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Intro>
        <Btns>
          <button>
            <img src={message} alt='' />
          </button>
          <button
            className={follow ? "btn-unfollow" : "btn-follow"}
            onClick={checkFollow}
          >
            {follow ? "언팔로우" : "팔로우"}
          </button>
          <button>
            <img src={share} alt='' />
          </button>
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
