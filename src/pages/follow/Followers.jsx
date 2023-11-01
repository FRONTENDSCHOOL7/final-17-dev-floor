import React, { useEffect } from "react";
import TopBarFollowers from "../../components/topbar/TopBarFollowers";
import { Body, Follower } from "./FollowersStyle";
import profileImg from "../../assets/images/Group 26.png";
import TabMenu from "../../components/tab/TabMenu";
import { followersState } from "../../state/FollowAtom";
import { useRecoilState } from "recoil";

export default function Followers() {
  const [followList, setFollowList] = useRecoilState(followersState);
  const toggleFollow = (index) => {
    const newFollowList = [...followList];
    newFollowList[index] = !newFollowList[index];
    setFollowList(newFollowList);
    // Local Storage에 팔로우 상태 저장
    localStorage.setItem("followList", JSON.stringify(newFollowList));
  };

  // 페이지가 로드될 때 Local Storage에서 팔로우 상태를 가져와 Recoil 상태에 설정
  useEffect(() => {
    const storedFollowList = localStorage.getItem("followList");
    if (storedFollowList) {
      setFollowList(JSON.parse(storedFollowList));
    }
  }, [setFollowList]);

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
          <button
            onClick={() => toggleFollow(0)}
            className={followList[0] ? "btn-follow" : "btn-cancle"}
          >
            {followList[0] ? "팔로우" : "취소"}
          </button>
        </div>
      </Follower>
      <Follower>
        <img src={profileImg} alt='' />
        <div className='container'>
          <div className='id'>
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button
            onClick={() => toggleFollow(1)}
            className={followList[1] ? "btn-follow" : "btn-cancle"}
          >
            {followList[1] ? "팔로우" : "취소"}
          </button>
        </div>
      </Follower>
      <TabMenu />
    </Body>
  );
}
