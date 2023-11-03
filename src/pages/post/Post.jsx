import React, { useEffect } from "react";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import { Body, Sect1, Sect2, Sect3 } from "./PostStyle";
import TopBar from "../../components/topbar/TopBarBasic";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { commentDelApi, commentListApi, postCommentApi } from "../../api/PostApi";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../state/AuthAtom";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ModalComDel from "../../components/modal/ModalComDel";

export default function Post() {
  const [modalOpen, setIsOpenModal] = useState(false); //게시글 모달
  const [comModalOpen, setComModalOpen] = useState(false); //댓글 모달

  const [commentContent, setCommentContent] = useState(''); //댓글내용상태
  const [postcomment, setPostcomment] = useState([]); //댓글목록
  const [commentId, setCommentId] = useState(null) //댓글id

  const token = useRecoilValue(tokenState);
  const [isPostId, setIsPostId] = useState(null)
  const [comCount, setComCount] = useState(0) //댓글수
  const [skip, setSkip] = useState(0)
  const [ref, inView] = useInView()
  // const {postId} = useParams()
  const showModal = () => {
    setIsOpenModal(true);
  };
  const showComModal = (commentId) => {
    setComModalOpen(true)
    setCommentId(commentId)
  }
  //댓글 작성
  const handleComment = async () => {
    if (commentContent.trim() === "") {
      return; //댓글 내용없으면 게시안함
    }
    try {
      const res = await postCommentApi(commentContent, token);

      const newComment = res.comment;
      setPostcomment([...postcomment, newComment]);
      setComCount(comCount+1)
      console.log(newComment)

      console.log("댓글작성완료");
    } catch (error) {
      console.error("댓글실패", error);
    }
    setCommentContent("");
    setIsPostId(null)
  };
  // 댓글 리스트
  const commentFetch = async () => {
    try {
      const res = await commentListApi(token,skip)
      console.log(res); 
      const newComment = res.comments

      setPostcomment((prevComment)=>  {
        return [...prevComment, ...newComment]
      })
      setComCount((prevCount) => prevCount + newComment.length)
      setSkip((skip) => skip + 10)
    } catch (error) {
      console.error('댓글 조회 x')
    }
  }
  useEffect(()=> {
    if(inView){
      commentFetch()
    }
  },[inView])

  //댓글 삭제
  const commentDel = async () => {
    try {
        if(commentId){
          await commentDelApi(commentId,token)
          console.log(commentId,token)
          setPostcomment(prev=> prev.filter(item=>item.id !== commentId))
          setComCount((prevCount) => prevCount - 1)
          
          setCommentId(null)
        }
    } catch (error) {
      console.error("댓글 삭제 놉")
    }
    setComModalOpen(false)
  }
  return (
    <Body>
      <TopBar />
      <Sect1>
        <div className='content-container'>
          <div className='content-list'>
            <img src={profileImg} alt='' className='profile-img' />
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
                  <img src={message} alt='' /> <span>{comCount}</span>
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
          {postcomment && postcomment.map((comment, index) => ( comment && comment.author &&
            (<div className='comment-list' key={index}>
              <img src={profileImg} alt='' className='profile-img' />
              <div className='comment'>
                <div className='comment-title'>
                  <div className='comment-id'>
                    <h3>{comment.author.username}</h3>
                    <p></p>
                  </div>
                  <div>
                    <button onClick={()=> showComModal(comment.id)}>
                      <img src={more} alt='' />
                    </button>
                  </div>
                </div>
                <div className='comment-inner'>
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>)
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
      <div ref={ref}>.</div>
      {modalOpen && <Modal setIsOpenModal={setIsOpenModal} />}
      {comModalOpen && <ModalComDel setComModalOpen={setComModalOpen} commentDel={commentDel}/>}
    </Body>
  );
}
