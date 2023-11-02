import React, { useEffect } from "react";
import { Body, Follower } from "./FollowingStyle";
import profileImg from "../../assets/images/Group 27.png";
import TabMenu from "../../components/tab/TabMenu";
import { useRecoilState } from "recoil";
import { followingState } from "../../state/FollowAtom";
import TopBarFollowings from "../../components/topbar/TopBarFollowing";

export default function Following() {
  const [followingList, setFollowingList] = useRecoilState(followingState);
  const toggleFollow = (index) => {
    const newFollowingList = [...followingList];
    newFollowingList[index] = !newFollowingList[index];
    setFollowingList(newFollowingList);
    // Local Storage에 팔로우 상태 저장
    localStorage.setItem("followingList", JSON.stringify(newFollowingList));
  };

  // 페이지가 로드될 때 Local Storage에서 팔로우 상태를 가져와 Recoil 상태에 설정
  useEffect(() => {
    const storedFollowList = localStorage.getItem("followingList");
    if (storedFollowList) {
      setFollowingList(JSON.parse(storedFollowList));
    }
  }, [setFollowingList]);
  return (
    <Body>
      <TopBarFollowings />
      <Follower>
        <img src={profileImg} alt='' />
        <div className='container'>
          <div className='id'>
            <h3>애월읍 한라봉 최고 맛집</h3>
            <p>정성을 다해 농사짓는 한라봉</p>
          </div>
          <button
            onClick={() => toggleFollow(0)}
            className={followingList[0] ? "btn-follow" : "btn-cancle"}
          >
            {followingList[0] ? "팔로우" : "언팔로우"}
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
            className={followingList[1] ? "btn-follow" : "btn-cancle"}
          >
            {followingList[1] ? "팔로우" : "언팔로우"}
          </button>
        </div>
      </Follower>
      <TabMenu />
    </Body>
  );
}
