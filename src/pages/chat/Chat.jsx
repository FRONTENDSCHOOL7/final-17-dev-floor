import React from "react";

import more from "../../assets/images/s-icon-more-vertical.png";
import back from "../../assets/images/icon-arrow-left.png";
import profileImg from "../../assets/images/Group 26.png";
import TabMenu from "../../components/tab/TabMenu";

import { Body, TopBar, Chat1, Chat2, Chat3, Sect1 } from "./ChatStyle";
import { Link, useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Body>
      <TopBar>
        <button onClick={handleBack}>
          <img src={back} alt='' />
        </button>
        <button>
          <img src={more} alt='' />
        </button>
      </TopBar>
      <Sect1>
        <Chat1>
          <img src={profileImg} alt='프로필 이미지' />
          <Link to='/chatroom'>
            <div>
              <h3>백엔드 개발자</h3>
              <div className='text'>
                <p className='contents'>
                  사이드 프로젝트 백엔드 개발자 구하셨나요??
                </p>
                <p className='date'>2023.10.25</p>
              </div>
            </div>
          </Link>
        </Chat1>
        <Chat2>
          <img src={profileImg} alt='프로필 이미지' />
          <div>
            <h3>대기업 가고싶다</h3>
            <div className='text'>
              <p className='contents'>면접 스터디 함께 해요!</p>
              <p className='date'>2023.10.25</p>
            </div>
          </div>
        </Chat2>
        <Chat3>
          <img src={profileImg} alt='프로필 이미지' />
          <div>
            <h3>개발바닥</h3>
            <div className='text'>
              <p className='contents'>공지 ...</p>
              <p className='date'>2023.10.25</p>
            </div>
          </div>
        </Chat3>
      </Sect1>
      <TabMenu />
    </Body>
  );
}
