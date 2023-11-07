import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.svg";
import message from "../../assets/images/icon-message-circle.png";
import { useState, useEffect } from "react";
import { postUserApi, postDel, likeApi, unlikeApi } from "../../api/PostApi";
import { Sect3 } from "./PostListStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import {
  profileImgState,
  tokenState,
  postMyAhtuorIdState,
} from "../../state/AuthAtom";
import { accountNameState } from "../../state/AuthAtom";
import ModalPostDel from "../modal/ModalPostDel";
import { useNavigate } from "react-router-dom";
import { postIdState } from "../../state/PostAtom";
import { ReactComponent as Like } from "../../assets/images/icon-heart.svg";

export default function PostList() {
  const accountName = useRecoilValue(accountNameState);
  const myAuthorId = useRecoilValue(postMyAhtuorIdState);
  const [ahtuorId, setAhtuorId] = useState(null);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const image = useRecoilValue(profileImgState);
  const token = useRecoilValue(tokenState);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const [fillHeart, setFillHeart] = useState({});

  const handleLike = async (itemId, e) => {
    e.stopPropagation();
    try {
      const res = fillHeart[itemId]
        ? await unlikeApi(itemId, token)
        : await likeApi(itemId, token);

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

  // 유저 게시글 목록 api 요청
  const postFetch = async () => {
    try {
      console.log("토큰", token);
      console.log("어카운트네임", accountName);
      const result = await postUserApi(accountName, token, skip);

      console.log(result);

      setPostData((postData) => {
        return [...postData, ...result.post];
      });
      setSkip((skip) => skip + 20);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // inView가 true일때 발동
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  //게시글 삭제
  const handlePostDel = async () => {
    console.log("하이");
    try {
      await postDel(postId, token);
      console.log(postId, token);
      setPostData((prev) => prev.filter((item) => item.id !== postId));

      setPostId(null);
    } catch (error) {
      console.error("게시글 삭제 실패");
    }
    setIsOpenModal(false);
  };

  //게시글 상세페이지로 이동
  const handlePostClick = (postId) => {
    localStorage.setItem("postId", postId);
    setPostId(localStorage.getItem("postId"));
    console.log("게시글id", postId);
    navigate("/post");
  };

  // 게시글 수정 페이지 이동
  const goToPostCorrection = () => {
    localStorage.setItem("postId", postId);
    setPostId(localStorage.getItem("postId"));
    console.log("게시글id", postId);
    navigate("/postWrite");
  };

  const modalOpen = (e, post_id, author_id) => {
    e.stopPropagation();
    setAhtuorId(author_id);
    setIsOpenModal(true);
    localStorage.setItem("postId", post_id);
    setPostId(localStorage.getItem("postId"));
  };

  useEffect(() => {
    const savedFillHeart = localStorage.getItem("fillHeart");
    if (savedFillHeart) {
      setFillHeart(JSON.parse(savedFillHeart));
    }
  }, []);
  return (
    <Sect3>
      <div>
        {postData?.map((item, idx) => {
          return (
            <div
              className='content-container'
              key={idx}
              id={item.id}
              onClick={() => handlePostClick(item.id)}
            >
              <div className='content-list'>
                <div className='content'>
                  <div className='content-title'>
                    <div className='content-id'>
                      <img src={image} alt='' className='profile-img' />
                      <div>
                        <h3>{item.author.accountname}</h3>
                        <p>{item.author.username}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={(e) => modalOpen(e, item.id, item.author._id)}
                      >
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
                      <Like
                        fill={fillHeart[item.id] ? "#7A8CCB" : "#fff"}
                      ></Like>
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
      </div>
      <div ref={ref}></div>
      {isOpenModal && myAuthorId === ahtuorId && (
        <ModalPostDel
          setIsOpenModal={setIsOpenModal}
          handlePostDel={handlePostDel}
          goToPostCorrection={goToPostCorrection}
        />
      )}
    </Sect3>
  );
}
