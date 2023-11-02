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
  const showModal = () => {
    setIsOpenModal(true);
  };
  const handleComment = (e) => {
    setcomment(e.target.value ? e.target.value : null);
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
        <h2>애월읍 위니브 감귤농장</h2>
        <button onClick={showModal}>
          <img src={more} alt='' />
        </button>
      </TopBarChat>
      <Sect1>
        <ChatWrap>
          <img src={profileImg} alt='' />
          <div className='chatbox'>
            웃을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그오 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </div>
          <p className='time'>12:39</p>
        </ChatWrap>
        <ChatWrap>
          <img src={profileImg} alt='' />
          <div className='chatbox'>안녕하세요. 감귤 사고싶어요요요요요</div>
          <p className='time'>12:41</p>
        </ChatWrap>
        <MyChatWrap>
          <p className='time'>12:50</p>
          <div className='chatboxMe'>네 말씀하세요.</div>
        </MyChatWrap>
        <MyChatWrap>
          <p className='time'>12:51</p>
          <img src='https://via.placeholder.com/240x240' alt='' />
        </MyChatWrap>
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
