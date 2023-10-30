import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";
import { useState } from "react";
import { useEffect } from "react";
import { postUserApi } from "../../api/PostApi";
import { useRecoilValue } from "recoil";
import { postIdState } from "../../state/PostAtom";
import { useInView } from "react-intersection-observer";

import { Sect3 } from "./PostListStyle";

export default function PostList() {
  const postId = useRecoilValue(postIdState);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();

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

  const postFetch = async () => {
    // 게시글 유저 게시물 api 요청
    try {
      const result = await postUserApi(postId);
      setPostData((prevState) => {
        return [...prevState, ...result.posts];
      });
      setPage((page) => page + 1);
    } catch (error) {
      console.log("실패했습니다");
    }
  };
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");

      postFetch();
    }
  }, [inView]);
  console.log(postData);
  return (
    <Sect3>
      <div>
        {postData?.map((item) => {
          return (
            <div className='content-container'>
              <div className='content-list'>
                <img src={profileImg} alt='' className='profile-img' />
                <div className='content'>
                  <div className='content-title'>
                    <div className='content-id'>
                      <h3>{item.author.accountname}</h3>
                      <p>{item.author.username}</p>
                    </div>
                    <div>
                      <button>
                        <img src={more} alt='' />
                      </button>
                    </div>
                  </div>
                  <div className='content-inner'>
                    <p>{item.content}</p>
                    <img src={item.image} alt='' />
                  </div>
                  <div className='like-comment'>
                    <button>
                      <img src={like} alt='' /> <span>58</span>
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
      </div>
      <div ref={ref}>안녕</div>;
    </Sect3>
  );
}
