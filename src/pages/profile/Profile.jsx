import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { followState, hamburgerBtnState } from "../../state/FollowAtom";
import { followApi, profileApi, unfollowApi } from "../../api/ProfileApi";
import { introState, userNameState } from "../../state/ModifyAtom";
import {
  accountNameState,
  profileImgState,
  tokenState,
} from "../../state/AuthAtom";

export default function Profile() {
  const [follow, setFollow] = useRecoilState(followState);
  const [hamburgerBtn, setHamburgerBtn] = useRecoilState(hamburgerBtnState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(accountNameState);
  const [intro, setIntro] = useRecoilState(introState);
  const [image, setImage] = useRecoilState(profileImgState);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };
  const token = useRecoilValue(tokenState);

  const navigate = useNavigate();

  const checkFollow = async (e) => {
    e.preventDefault();
    try {
      if (follow) {
        setFollow(!follow);
        // localStorage.setItem("isFollowed", !follow);
        const res = await unfollowApi(id, token);
        console.log(res);
      } else {
        setFollow(!follow);
        // localStorage.setItem("isFollowed", !follow);
        const res = await followApi(id, token);
        console.log(res);
      }
    } catch (error) {
      console.log("에러가 발생했습니다.");
    }
  };
  useEffect(() => {
    if (token === null) {
      navigate("/404");
    }
    // const storedIsFollowed = localStorage.getItem("isFollowed");
    // setFollow(storedIsFollowed === "true");
    try {
      handleProfile();
    } catch (error) {
      console.log("에러입니다.");
    }
  }, []);

  // 상대 프로필
  // 상대 프로필 클릭시 넘어오는 화면 => profile,
  const handleProfile = async (e) => {
    try {
      const res = await profileApi(id, token);
      console.log(res);
      setImage(res.profile.image);
      setUserName(res.profile.username);
      setId(res.profile.accountname);
      setIntro(res.profile.intro);
      setFollow(res.profile.isfollow);
      setFollower(res.profile.followerCount);
      setFollowing(res.profile.followingCount);
    } catch (error) {
      console.log("해당 계정이 존재하지 않습니다.");
    }
  };

  return (
    <Body>
      <TopBar />
      <Sect1>
        <ProImg>
          <button>
            <Link to='/followers'>
              <span className='followers'>{follower}</span>
              <p>followers</p>
            </Link>
          </button>
          <img
            src={image ? image : profileImg}
            alt='프로필 이미지'
            className='profileImg'
          />
          <button>
            <Link to='/following'>
              <span>{following}</span>
              <p>followings</p>
            </Link>
          </button>
        </ProImg>
        <Intro>
          <h2> {userName} </h2>
          <p>@ {id}</p>
          <p>{intro}</p>
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
