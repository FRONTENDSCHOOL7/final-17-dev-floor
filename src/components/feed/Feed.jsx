import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import message from "../../assets/images/icon-message-circle.png";
import basicImg from "../../assets/images/Group 26.png";
import { Body, Sect1 } from "./FeedStyle";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import {
  accountNameState,
  profileImgState,
  tokenState,
} from "../../state/AuthAtom";
import { likeApi, postGet } from "../../api/PostApi";
import { useNavigate } from "react-router";
import { introState, userNameState } from "../../state/ModifyAtom";
import { ReactComponent as Like } from "../../assets/images/icon-heart.svg";

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const [image, setImage] = useRecoilState(profileImgState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(accountNameState);
  const [intro, setIntro] = useRecoilState(introState);
  const [heart, setHeart] = useState([]);
  // 하트 갯수
  const [heartArray, setHeartArray] = useState([]);
  // 내가 좋아요 눌렀는지
  const token = useRecoilValue(tokenState);

  const navigate = useNavigate();

  // 좋아요 함수

  const handleLike = async (itemId, idx) => {
    try {
      const res = await likeApi(itemId, token);
      console.log(itemId);
      console.log("좋아요 res", res);
    } catch (error) {
      console.log("좋아요 에러");
    }
  };

  // 날짜 데이터 변환 함수
  const getDate = (date) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    const hours = _date.getHours();
    const minutes = _date.getMinutes();
    return `${yyyy}.${mm}.${dd}. ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleProfileClick = (
    itemAccountname,
    itemUsername,
    itemIntro,
    itemImage
  ) => {
    navigate("/profile");
    console.log("프로필 이동");
    setId(itemAccountname);
    setUserName(itemUsername);
    setIntro(itemIntro);
    setImage(itemImage);
  };

  // 모든 게시글 api 요청
  const postFetch = async () => {
    try {
      console.log("토큰", token);
      const result = await postGet(token, skip);

      console.log("@@@");
      console.log(result.posts);
      console.log(postData);

      result.posts.forEach((item) => {
        heart.push(item.heartCount);
      });

      console.log("하트", heart);

      setPostData((postData) => {
        return [...postData, ...result.posts];
      });
      setSkip((skip) => skip + 10);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // iinView && !isend가 true 일 때만 데이터를 불러옴!
  // 페이지 시작 시 렌더링
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  return (
    <Body>
      <Sect1>
        {postData?.map((item, idx) => {
          return (
            <div className='content-container' key={idx}>
              <div className='content-list'>
                <img
                  src={item.author.image ? item.author.image : basicImg}
                  alt=''
                  className='profile-img'
                  onClick={() =>
                    handleProfileClick(
                      item.author.accountname,
                      item.author.username,
                      item.author.intro,
                      item.author.image
                    )
                  }
                />
                <div className='content'>
                  <div className='content-title'>
                    <div className='content-id'>
                      <h3>{item.author.username}</h3>
                      <p>{item.author.accountname}</p>
                    </div>
                    <div>
                      <button>
                        <img src={more} alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='content-inner'>
                    <p>{item.content}</p>
                    {item?.image && <img src={item.image} alt='' />}
                  </div>
                  <div className='like-comment'>
                    <button onClick={() => handleLike(item._id, item.hearted)}>
                      <Like></Like>
                      <span>{item.heartCount}</span>
                    </button>
                    <button>
                      <img src={message} alt='' /> <span>12</span>
                    </button>
                  </div>
                  <span className='date'>{getDate(item.updatedAt)}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={ref}></div>
      </Sect1>
    </Body>
  );
}
