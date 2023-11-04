import React, { useEffect, useRef, useHistory, useState } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";
import { postDel } from "../../api/PostApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../../state/AuthAtom";
import { postIdState } from "../../state/PostAtom";

export default function Modal({ modalOpen, setIsOpenModal, children }) {
  const wrapperRef = useRef();
  const postId2 = useRecoilValue(postIdState);

  useEffect(() => {
    document.addEventListener("onclick", handleClickOutside);

    return () => {
      document.removeEventListener("onclick", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.currentTarget)
    ) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  const xClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div ref={wrapperRef} value={modalOpen}>
      {children}
      <Sect1>
        <div className='container'>
          <div className='barr'>
            <button className='btn' onClick={xClose}>
              <img src={bar} alt='' />
            </button>
          </div>
          <div className='letter'>
            <button>신고하기</button>
            {/* <button onClick={postDelete}>삭제</button> */}
          </div>
        </div>
      </Sect1>
    </div>
  );
}
