import React from "react";
import TopBarFollowers from "../../components/topbar/TopBarFollowers";
import { Body, Follower } from "./FollowersStyle";
import profileImg from "../../assets/images/Group 26.png";

export default function Followers() {
  return (
    <Body>
      <TopBarFollowers />
      <Follower>
        <img src={profileImg} alt="" />
        <div>
          <h3>애월읍 한라봉 최고 맛집</h3>
          <p>정성을 다해 농사짓는 한라봉</p>
        </div>
        <button>팔로우</button>
      </Follower>
    </Body>
  );
}
