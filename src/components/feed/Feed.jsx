import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import message from "../../assets/images/icon-message-circle.png";
import { Body, Sect1 } from "./FeedStyle";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import { profileImgState, tokenState } from "../../state/AuthAtom";
import { postGet } from "../../api/PostApi";

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const image = useRecoilValue(profileImgState);
  const token = useRecoilValue(tokenState);

  console.log("안녕하세요");

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

  // 모든 게시글 api 요청
  const postFetch = async () => {
    try {
      console.log("토큰", token);
      const result = await postGet(token, skip);

      console.log("@@@");
      console.log(result.posts);
      console.log(postData);

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
                <img src={image} alt='' className='profile-img' />
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
                    {item.image && <img src={item.image} alt='' />}
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
        <div ref={ref}>.</div>
      </Sect1>
    </Body>
  );
}
