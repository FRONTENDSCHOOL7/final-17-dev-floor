import React, { useEffect, useState } from "react";
import { Body, Follower } from "./FollowingStyle";
import profileImg from "../../assets/images/Group 27.png";
import TabMenu from "../../components/tab/TabMenu";
import { useRecoilState, useRecoilValue } from "recoil";
import { followState, followingState } from "../../state/FollowAtom";
import TopBarFollowings from "../../components/topbar/TopBarFollowing";
import { followApi, followingListApi, unfollowApi } from "../../api/ProfileApi";
import { useNavigate } from "react-router-dom";
import { accountNameState, tokenState } from "../../state/AuthAtom";

export default function Following() {
  const [followingList, setFollowingList] = useState([]);
  const [follow, setFollow] = useState([]);
  const accountName = useRecoilValue(accountNameState);
  const token = useRecoilValue(tokenState);
  const navigate = useNavigate();

  const checkFollow = async (itemAccountName, isFollowed, index) => {
    try {
      if (isFollowed) {
        const res = await unfollowApi(itemAccountName, token);
        console.log(res);
      } else {
        const res = await followApi(itemAccountName, token);
        console.log(res);
      }

      // follow 배열을 복사하고, 해당 인덱스의 값을 토글
      const updatedFollow = [...follow];
      updatedFollow[index] = !isFollowed;

      // 변경된 배열을 상태로 설정
      setFollow(updatedFollow);
    } catch (error) {
      console.log("에러가 발생했습니다.");
    }
  };

  const followList = async () => {
    try {
      const res = await followingListApi(accountName, token);
      setFollowingList(res);

      res.forEach((item) => {
        follow.push(item.isfollow);
      });

      // 팔로우 상태를 초기화
      // const isFollowedArray = new Array(res.length).fill(true);
      // setFollow(isFollowedArray);
    } catch (error) {
      console.log("팔로잉 리스트 에러입니다.");
    }
  };

  useEffect(() => {
    if (token === null) {
      navigate("/404");
    }
    followList();
  }, [setFollowingList]);

  return (
    <Body>
      <TopBarFollowings />
      {followingList.map((item, index) => (
        <Follower key={index}>
          <img src={item.image} alt='' className='profileImg' />
          <div className='container'>
            <div className='id'>
              <h3>{item.username}</h3>
              <p>{item.intro}</p>
            </div>
            <button
              className={follow[index] ? "btn-cancle" : "btn-follow"}
              onClick={() =>
                checkFollow(item.accountname, follow[index], index)
              }
            >
              {follow[index] ? "언팔로우" : "팔로우"}
            </button>
          </div>
        </Follower>
      ))}
      <TabMenu />
    </Body>
  );
}
