import React from "react";
import home from "../../assets/images/icon-home.png";
import chat from "../../assets/images/icon-message-circle-1.png";
import post from "../../assets/images/icon-edit.png";
import profile from "../../assets/images/icon-user.png";
import { Tab } from "./TabMenuStyle";

export default function TabMenu() {
  return (
    <Tab>
      <button>
        <img src={home} alt="" />
        <p>홈</p>
      </button>
      <button>
        <img src={chat} alt="" />
        <p>채팅</p>
      </button>
      <button>
        <img src={post} alt="" />
        <p>게시물 작성</p>
      </button>
      <button>
        <img src={profile} alt="" />
        <p>프로필</p>
      </button>
    </Tab>
  );
}
