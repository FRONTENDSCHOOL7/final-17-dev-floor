import React, { useEffect, useRef } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";
import { postDel } from "../../api/PostApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../../state/AuthAtom";
import { postIdState } from "../../state/PostAtom";

export default function Modal({ isOpenModal, setIsOpenModal, children}) {
  const wrapperRef = useRef();
  // const token = useRecoilValue(tokenState);
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";
  // const postId = useRecoilValue(postIdState)
  const [postId, setPostId] = useRecoilState(postIdState)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };
  const xClose = () => {
    setIsOpenModal(false);
  };
  const postDelete = async () => {
    try {
      await postDel(postId,token)
      console.log(postId)
      setPostId('') // 삭제 성공 후 postId 상태 초기화
    } catch(error) {
      console.log(error)
    }
  }
  
  return (
    <div ref={wrapperRef} value={isOpenModal}>
      <Sect1>
        <div className='container'>
          <div className='barr'>
            <button className='btn' onClick={xClose}>
              <img src={bar} alt='' />
            </button>
          </div>
          <div className='letter'>
            <button>신고하기</button>
            <button onClick={postDelete}>삭제</button>
          </div>
        </div>
      </Sect1>
    </div>
  );
}
