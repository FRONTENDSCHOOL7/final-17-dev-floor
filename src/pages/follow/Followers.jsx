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
        <div className="container">
          <div className="id">
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button className="btn-follow">팔로우</button>
        </div>
      </Follower>
      <Follower>
        <img src={profileImg} alt="" />
        <div className="container">
          <div className="id">
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button className="btn-cancle">취소</button>
        </div>
      </Follower>
    </Body>
  );
}
