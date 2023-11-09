import React, { useEffect, useRef } from "react";
import { Sect1 } from "../../components/modal/ChatModalStyle";
import bar from "../../assets/images/bar.png";
import { useNavigate } from "react-router-dom";

export default function Modal({ isOpenModal, setIsOpenModal, children }) {
  const wrapperRef = useRef();
  const navigate = useNavigate()

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
  const ChatRoomPrev = () => {
    navigate(-1)
  }
  return (
    <div ref={wrapperRef} value={isOpenModal}>
      {children}
      <Sect1>
        <div className='container'>
          <div className='barr'>
            <button className='btn' onClick={xClose}>
              <img src={bar} alt='' />
            </button>
          </div>
          <div className='letter'>
            <button onClick={ChatRoomPrev}>채팅방 나가기</button>
          </div>
        </div>
      </Sect1>
    </div>
  );
}
