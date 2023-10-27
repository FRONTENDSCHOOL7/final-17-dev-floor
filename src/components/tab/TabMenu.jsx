import React, { useState } from "react";
import home from "../../assets/images/icon-home.png";
import fillHome from "../../assets/images/icon-home-fill.png";
import chat from "../../assets/images/icon-message-circle-1.png";
import fillChat from "../../assets/images/icon-message-circle-fill.png";
import post from "../../assets/images/icon-edit.png";
import fillPost from "../../assets/images/icon-edit-fill.png";
import profile from "../../assets/images/icon-user.png";
import fillProfile from "../../assets/images/icon-user-fill.png";
import { Tab } from "./TabMenuStyle";
import { Link } from "react-router-dom";

export default function TabMenu() {
  return (
    <Tab>
      <button>
        <Link to='/home'>
          <div><img src={home} alt='' /></div>
          <div><img src={fillHome} alt='' className='onHover' /></div>
          <p>홈</p>
        </Link>
      </button>
      <button>
        <Link to='/chat'>
          <div><img src={chat} alt='' /></div>
          <div><img src={fillChat} alt='' className='onHover' /></div>
          <p>채팅</p>
        </Link>
      </button>
      <button>
        <Link to='/post'>
          <div><img src={post} alt='' /></div>
          <div><img src={fillPost} alt='' className='onHover post' /></div>
          <p>게시물 작성</p>
        </Link>
      </button>
      <button>
        <Link to='/myprofile'>
          <div><img src={profile} alt='' /></div>
          <div><img src={fillProfile} alt='' className='onHover profile' /></div>
          <p>프로필</p>
        </Link>
      </button>
    </Tab>
  );
}