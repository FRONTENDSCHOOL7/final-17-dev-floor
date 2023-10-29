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
import { profileApi, myProfileApi } from "../../api/ProfileApi";
import { idState, introState, userNameState } from "../../state/ModifyAtom";
import { useRecoilState } from "recoil";

export default function MyProfile() {
  const [hamburgerBtn, setHamburgerBtn] = useState(true);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(idState);
  const [intro, setIntro] = useRecoilState(introState);

  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };

  // 내 프로필 조회

  const handleMyProfile = async (e) => {
    try {
      const res = await myProfileApi();
      // console.log(res);
      setUserName(res.user.username);
      setId(res.user.accountname);
      setIntro(res.user.intro);
    } catch (error) {
      console.log("에러입니다.");
    }
  };

  useEffect(() => {
    handleMyProfile();
  }, []);

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
          <h2>{userName}</h2>
          <p>@ {id}</p>
          <p>{intro}</p>
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