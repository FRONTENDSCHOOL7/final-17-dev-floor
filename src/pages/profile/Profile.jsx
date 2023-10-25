import React from "react";
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

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { followState, hamburgerBtnState } from "./recoilAtoms"; // Import your Recoil atoms

export default function Profile() {
  // Use Recoil state for follow and hamburgerBtn
  const [follow, setFollow] = useRecoilState(followState);
  const hamburgerBtn = useRecoilValue(hamburgerBtnState);
  const setHamburgerBtn = useSetRecoilState(hamburgerBtnState);

  const showPost = () => {
    setHamburgerBtn(!hamburgerBtn);
  };

  const checkFollow = () => {
    setFollow(!follow);
  };

  return (
    <Body>
      <TopBar />
      <Sect1>
        {/* ... your existing JSX */}
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
