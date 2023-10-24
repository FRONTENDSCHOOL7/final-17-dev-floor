import React from "react";
import TopBarFollowers from "../../components/topbar/TopBarFollowing";
import { Body, Follower } from "./FollowingStyle";
import profileImg from "../../assets/images/Group 26.png";
import TabMenu from "../../components/tab/TabMenu";

export default function Following() {
  return (
    <Body>
      <TopBarFollowers />
      <Follower>
        <img src={profileImg} alt='' />
        <div className='container'>
          <div className='id'>
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button className='btn-cancle'>언팔로우</button>
        </div>
      </Follower>
      <Follower>
        <img src={profileImg} alt='' />
        <div className='container'>
          <div className='id'>
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button className='btn-cancle'>언팔로우</button>
        </div>
      </Follower>
      <TabMenu />
    </Body>
  );
}
