import React, { useEffect } from "react";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import { Body, Sect1, Sect2, Sect3 } from "./PostStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { postCommentApi } from "../../api/PostApi";
import { useRecoilValue } from "recoil";
import { profileImgState, tokenState } from "../../state/AuthAtom";

export default function Post({ post_id }) {
  const [modalOpen, setIsOpenModal] = useState(false);
  const [comment, setComment] = useState(0);
  const proImg = useRecoilValue(profileImgState);
  const [commentContent, setCommentContent] = useState(""); //댓글내용상태
  const [postcomment, setPostcomment] = useState([]); //댓글목록
  const token = useRecoilValue(tokenState);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const handleComment = async () => {
    if (commentContent.trim() === "") {
      return; //댓글 내용없으면 게시안함
    }
    // setcomment(e.target.value);

    try {
      const res = await postCommentApi(commentContent, token);
      console.log(res);

      const newComment = res.comment;

      setPostcomment([...postcomment, newComment]);
      console.log("댓글작성완료");
      setCommentContent("");
    } catch (error) {
      console.error("댓글실패", error);
    }
  };

  // useEffect(()=> {
  //     const commenWrite = async (postId) => {
  //       const result = await postCommentApi(postId, comments)
  //       setPostcomment(result)
  //       console.log(postCommentApi)
  //     }
  //     commenWrite()
  // },[])
  return (
    <Body>
      <TopBar />
      <Sect1>
        <div className='content-container'>
          <div className='content-list'>
            <img src={proImg} alt='' className='profile-img' />
            <div className='content'>
              <div className='content-title'>
                <div className='content-id'>
                  <h3>애월읍 위니브 감귤농장</h3>
                  <p>@ weniv_Mandarin</p>
                </div>
                <div>
                  <button className='modalDel' onClick={showModal}>
                    <img src={more} alt='' />
                  </button>
                </div>
              </div>
              <div className='content-inner'>
                <p>
                  옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                  뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고,
                  못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                </p>
                <img src='https://via.placeholder.com/304x228' alt='' />
              </div>
              <div className='like-comment'>
                <button>
                  <img src={like} alt='' /> <span>58</span>
                </button>
                <button>
                  <img src={message} alt='' /> <span>12</span>
                </button>
              </div>
              <span className='date'>2020년 10월 21일</span>
            </div>
          </div>
        </div>
      </Sect1>
      {/* Sect2 댓글 */}
      <Sect2>
        <div className='comment-container'>
          {postcomment.map((comment, index) => (
            <div className='comment-list' key={index}>
              <img src={profileImg} alt='' className='profile-img' />
              <div className='comment'>
                <div className='comment-title'>
                  <div className='comment-id'>
                    <h3>{comment.author.username}</h3>
                    <p></p>
                  </div>
                  <div>
                    <button>
                      <img src={more} alt='' />
                    </button>
                  </div>
                </div>
                <div className='comment-inner'>
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='comment-list'>
            <img src={profileImg} alt='' className='profile-img' />
            <div className='comment'>
              <div className='comment-title'>
                <div className='comment-id'>
                  <h3>감귤러버</h3>
                  <p>· 5분 전</p>
                </div>
                <div>
                  <button>
                    <img src={more} alt='' />
                  </button>
                </div>
              </div>
              <div className='comment-inner'>
                <p>
                  안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요?
                  기다리기 지쳤어요 땡뻘땡뻘...
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </Sect2>
      {/* Sect2 댓글 목록 */}
      {/* Sect3 댓글창 */}
      <Sect3>
        <div className='comment-container'>
          <div className='comment-list'>
            <img src={profileImg} alt='' className='profile-img' />
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
      {modalOpen && <Modal setIsOpenModal={setIsOpenModal} />}
    </Body>
  );
}
