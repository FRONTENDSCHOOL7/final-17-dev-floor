import React, { useEffect } from "react";
import message from "../../assets/images/icon-message-circle.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import { Body, Sect1, Sect2, Sect3 } from "./PostStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import {
  commentDelApi,
  commentListApi,
  postCommentApi,
} from "../../api/PostApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import ModalComDel from "../../components/modal/ModalComDel";
import {
  tokenState,
  profileImgState,
  myProfileImage,
  postMyAhtuorIdState,
} from "../../state/AuthAtom";
import { postDetail } from "../../api/PostApi";
import { postIdState } from "../../state/PostAtom";

export default function Post() {
  const [modalOpen, setIsOpenModal] = useState(false);
  const profileImage = useRecoilValue(profileImgState);
  const postId = useRecoilValue(postIdState);
  const [detail, setDetail] = useState([]);
  const [commentContent, setCommentContent] = useState(""); //댓글내용상태
  const [postcomment, setPostcomment] = useState([]); //댓글목록
  const [ahtuorId, setAhtuorId] = useState(null); //댓글작성자id
  const [commentId, setCommentId] = useState(null); //댓글id
  const [comModalOpen, setComModalOpen] = useState(false); //댓글 모달
  const loginUserImage = useRecoilValue(myProfileImage); // 로그인한 유저 프로필이미지
  const myAuthorId = useRecoilValue(postMyAhtuorIdState);
  const token = useRecoilValue(tokenState);
  const [isPostId, setIsPostId] = useState(null);
  const [comCount, setComCount] = useState(0); //댓글수
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const showModal = () => {
    setIsOpenModal(true);
  };
  const showComModal = (comment_id, author_id) => {
    setComModalOpen(true);
    setAhtuorId(author_id);
    setCommentId(comment_id);
    console.log("작성자아이디", ahtuorId);
    console.log("내아이디", myAuthorId);
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

  //댓글 작성
  const handleComment = async () => {
    if (commentContent.trim() === "") {
      return; //댓글 내용없으면 게시안함
    }
    try {
      const res = await postCommentApi(postId, commentContent, token);

      const newComment = res.comment;
      setPostcomment([...postcomment, newComment]);
      setComCount(comCount + 1);
      console.log(newComment);

      console.log("댓글작성완료");
    } catch (error) {
      console.error("댓글실패", error);
    }
    setCommentContent("");
    setIsPostId(null);
  };

  // 댓글 리스트
  const getTimeDiff = (date) => {
    const now = Date.now();
    const commentDate = new Date(date).getTime();
    const diffInMs = now - commentDate;

    const seconds = diffInMs / 1000;
    if (seconds < 60) return `${Math.floor(seconds)}초 전`;

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;

    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;

    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const commentFetch = async () => {
    try {
      const res = await commentListApi(postId, token, skip);
      console.log(res);
      console.log("댓글정보", res);
      const newComment = res.comments;

      setPostcomment((prevComment) => {
        return [...prevComment, ...newComment];
      });
      setComCount((prevCount) => prevCount + newComment.length);
      setSkip((skip) => skip + 10);
    } catch (error) {
      console.error("댓글 조회 x");
    }
  };
  useEffect(() => {
    if (inView) {
      commentFetch();
    }
  }, [inView]);

  //댓글 삭제
  const commentDel = async () => {
    try {
      if (commentId) {
        await commentDelApi(postId, commentId, token);
        console.log(commentId, token);
        setPostcomment((prev) => prev.filter((item) => item.id !== commentId));
        setComCount((prevCount) => prevCount - 1);

        setCommentId(null);
      }
    } catch (error) {
      console.error("댓글 삭제 놉");
    }
    setComModalOpen(false);
  };

  // 해당 유저 게시글
  const postfetch = async () => {
    console.log(postId);
    try {
      const result = await postDetail(postId, token);
      setDetail(result.post);
    } catch (error) {
      console.error("게시글 불러오기 실패", error);
    }
  };

  useEffect(() => {
    postfetch();
  }, []);

  return (
    <Body>
      <TopBar />
      <Sect1>
        <div className='content-container'>
          <div className='content-list'>
            <img src={profileImage} alt='' className='profile-img' />
            <div className='content'>
              <div className='content-title'>
                <div className='content-id'>
                  <h3>{detail.author?.accountname}</h3>
                  <p>{detail.author?.username}</p>
                </div>
                <div>
                  <button className='modalDel' onClick={showModal}>
                    <img src={more} alt='' />
                  </button>
                </div>
              </div>
              <div className='content-inner'>
                <p>{detail?.content}</p>
                {detail.image &&
                  (detail.image.split(",").length > 1 ? (
                    detail.image.split(",").map((el, idx) => {
                      return (
                        <div key={idx}>
                          <img src={el} alt='' />
                        </div>
                      );
                    })
                  ) : (
                    <img src={detail.image} alt='' />
                  ))}
              </div>
              <div className='like-comment'>
                <button>
                  <img src={like} alt='' /> <span>58</span>
                </button>
                <button>
                  <img src={message} alt='' /> <span>{comCount}</span>
                </button>
              </div>
              <span className='date'>{getDate(detail?.updatedAt)}</span>
            </div>
          </div>
        </div>
      </Sect1>
      {/* Sect2 댓글 */}
      <Sect2>
        <div className='comment-container'>
          {postcomment &&
            postcomment.map(
              (comment, index) =>
                comment &&
                comment.author && (
                  <div className='comment-list' key={index}>
                    <img
                      src={comment.author.image}
                      alt=''
                      className='profile-img'
                    />
                    <div className='comment'>
                      <div className='comment-title'>
                        <div className='comment-id'>
                          <h3>{comment.author.username}</h3>
                          <div className='date'>
                            {getTimeDiff(comment.createdAt)}
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              showComModal(comment.id, comment.author._id)
                            }
                          >
                            <img src={more} alt='' />
                          </button>
                        </div>
                      </div>
                      <div className='comment-inner'>
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </Sect2>
      <Sect3>
        <div className='comment-container'>
          <div className='comment-list'>
            <img src={loginUserImage} alt='' className='profile-img' />
            <div className='comment-title'>
              <input
                value={commentContent}
                placeholder='댓글 입력하기...'
                onChange={(e) => setCommentContent(e.target.value)}
              />

              <button
                onClick={handleComment}
                className={"btn" + (commentContent ? "Active" : "Disabled")}
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </Sect3>
      <div ref={ref}>.</div>
      {modalOpen && <Modal setIsOpenModal={setIsOpenModal} />}
      {comModalOpen &&
        (myAuthorId === ahtuorId ? (
          <ModalComDel
            setComModalOpen={setComModalOpen}
            commentDel={commentDel}
          />
        ) : (
          <Modal
            setIsOpenModal={setIsOpenModal}
            setComModalOpen={setComModalOpen}
          />
        ))}
    </Body>
  );
}
