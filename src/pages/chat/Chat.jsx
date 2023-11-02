import React from "react";

import more from "../../assets/images/s-icon-more-vertical.png";
import back from "../../assets/images/icon-arrow-left.png";
import profileImg from "../../assets/images/Group 26.png";
import TabMenu from "../../components/tab/TabMenu";

import { Body, TopBar, Chat1, Sect1 } from "./ChatStyle";
import { Link } from "react-router-dom";

export default function Chat() {
  return (
    <Body>
      <TopBar>
        <button>
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
              <h3>애월읍 위니브 감귤농장</h3>
              <div className='text'>
                <p className='contents'>이번에 정정 언제하맨마씸?</p>
                <p className='date'>2020.10.25</p>
              </div>
            </div>
          </Link>
        </Chat1>
        <Chat1>
          <img src={profileImg} alt='프로필 이미지' />
          <div>
            <h3>제주감귤마을</h3>
            <div className='text'>
              <p className='contents'>
                깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...
              </p>
              <p className='date'>2020.10.25</p>
            </div>
          </div>
        </Chat1>
        <Chat1>
          <img src={profileImg} alt='프로필 이미지' />
          <div>
            <h3>누구네 농장 친환경 한라봉</h3>
            <div className='text'>
              <p className='contents'>
                내 차는 내가 평가한다. 오픈 이벤트에 참여 하...
              </p>
              <p className='date'>2020.10.25</p>
            </div>
          </div>
        </Chat1>
      </Sect1>
      <TabMenu />
    </Body>
  );
}
