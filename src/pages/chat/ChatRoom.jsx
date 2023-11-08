import React, { useRef } from "react";

import more from "../../assets/images/s-icon-more-vertical.png";
import back from "../../assets/images/icon-arrow-left.png";
import profileImg from "../../assets/images/Group 26.png";
import photosendImg from "../../assets/images/img-button.png";
import { useState } from "react";
import Modal from "../../components/modal/ChatModal";
import { Link } from "react-router-dom";

import {
  Body,
  TopBarChat,
  Sect1,
  ChatWrap,
  MyChatWrap,
  ChatBar,
} from "./ChatRoomStyle";

export default function ChatRoom() {
  const [modalOpen, setIsOpenModal] = useState(false);
  const [comment, setcomment] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fontColor, setFontColor] = useState("#c4c4c4"); // 폰트 색상 상태 추가

  const showModal = () => {
    setIsOpenModal(true);
  };

  const handleComment = (e) => {
    setcomment(e.target.value ? e.target.value : null);
    setFontColor(e.target.value ? "#000000" : "#c4c4c4"); // 폰트 색상 상태 업데이트
  };

  const fileRef = useRef(null);

  return (
    <Body>
      <TopBarChat>
        <Link to='/chat'>
          <button>
            <img src={back} alt='' />
          </button>
        </Link>
        <h2>백엔드 개발자</h2>
        <button onClick={showModal}>
          <img src={more} alt='' />
        </button>
      </TopBarChat>
      <Sect1>
        <ChatWrap>
          <img src={profileImg} alt='' />
          <div className='chatbox'>
            사이드 프로젝트 백엔드 개발자 구하셨나요?? 아직 못 구하셨다면 백엔드
            개발자로 참여 희망합니다
          </div>
          <p className='time'>12:39</p>
        </ChatWrap>
        <ChatWrap>
          <img src={profileImg} alt='' />
          <div className='chatbox'>
            자바,스프링 사용으로 개발하는데, 도움이 될 것 같습니다!
          </div>
          <p className='time'>12:41</p>
        </ChatWrap>
        <MyChatWrap>
          <p className='time'>12:50</p>
          <div className='chatboxMe'>좋아요! 같이 해요!</div>
        </MyChatWrap>
        {/* <MyChatWrap>
          <p className='time'>12:51</p>
          <img src='https://via.placeholder.com/240x240' alt='' />
        </MyChatWrap> */}
      </Sect1>
      <ChatBar>
        <div className='chat-container'>
          <div className='chat-list'>
            <input
              type='file'
              style={{ display: "none" }}
              ref={fileRef}
              onChange={(e) => setSelectedImage(e.target.files?.[0])}
            />
            <button className='send' onClick={() => fileRef.current.click()}>
              <img src={photosendImg} alt='' className='photo-img' />
            </button>
            <div className='chat-title'>
              <input
                placeholder='메시지 입력하기...'
                onChange={handleComment}
                style={{ color: fontColor }} // 입력 폰트 색상 적용
              />
              <button
                className={
                  selectedImage || comment ? "btnActive" : "btnDisabled"
                }
              >
                전송
              </button>
            </div>
          </div>
        </div>
      </ChatBar>
      {modalOpen && <Modal setIsOpenModal={setIsOpenModal} />}
    </Body>
  );
}
