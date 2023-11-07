import React, { useState, useEffect } from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import message from "../../assets/images/icon-message-circle.png";
import basicImg from "../../assets/images/Group 26.png";
import { Body, Sect1 } from "./FeedStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import {
  accountNameState,
  profileImgState,
  tokenState,
} from "../../state/AuthAtom";
import { likeApi, postGet, unlikeApi } from "../../api/PostApi";
import { useNavigate } from "react-router";
import { introState, userNameState } from "../../state/ModifyAtom";
import { ReactComponent as Like } from "../../assets/images/icon-heart.svg";
import { postIdState } from "../../state/PostAtom";

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const [image, setImage] = useRecoilState(profileImgState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [id, setId] = useRecoilState(accountNameState);
  const [intro, setIntro] = useRecoilState(introState);
  const [fillHeart, setFillHeart] = useState({});
  const [postId, setPostId] = useRecoilState(postIdState);
  const token = useRecoilValue(tokenState);

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    localStorage.setItem("postId", postId);
    setPostId(localStorage.getItem("postId"));
    console.log("게시글id", postId);
    navigate("/post");
  };

  const handleLike = async (itemId, e) => {
    e.stopPropagation();
    try {
      const res = fillHeart[itemId]
        ? await unlikeApi(itemId, token)
        : await likeApi(itemId, token);

      console.log(res);

      setFillHeart((prev) => {
        const newFillHeart = { ...prev };
        newFillHeart[itemId] = res.post.hearted;
        localStorage.setItem("fillHeart", JSON.stringify(newFillHeart));
        return newFillHeart;
      });

      const updatedPostData = postData.map((post) =>
        post.id === itemId ? { ...post, heartCount: res.post.heartCount } : post
      );
      setPostData(updatedPostData);
    } catch (error) {
      console.log("좋아요/좋아요 취소 에러");
    }
  };

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

  const postFetch = async () => {
    try {
      const result = await postGet(token, skip);
      setPostData((prevPostData) => [...prevPostData, ...result.posts]);
      console.log(result);
      setSkip((prevSkip) => prevSkip + 10);
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

  useEffect(() => {
    const savedFillHeart = localStorage.getItem("fillHeart");
    if (savedFillHeart) {
      setFillHeart(JSON.parse(savedFillHeart));
    }
  }, []);

  return (
    <Body>
      <Sect1>
        {postData?.map((item) => (
          <div
            className='content-container'
            key={item._id}
            onClick={() => handlePostClick(item.id)}
          >
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
                  {item.image &&
                    (item.image.split(",").length > 1 ? (
                      item.image.split(",").map((el, idx) => {
                        return (
                          <div key={idx}>
                            <img src={el} alt='' />
                          </div>
                        );
                      })
                    ) : (
                      <img src={item.image} alt='' />
                    ))}
                </div>
                <div className='like-comment'>
                  <button onClick={(e) => handleLike(item.id, e)}>
                    <Like fill={fillHeart[item.id] ? "#7A8CCB" : "#fff"}></Like>
                    <span>{item.heartCount}</span>
                  </button>
                  <button>
                    <img src={message} alt='' className='comment' />{" "}
                    <span>12</span>
                  </button>
                </div>
                <span className='date'>{getDate(item.updatedAt)}</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={ref}></div>
      </Sect1>
    </Body>
  );
}
