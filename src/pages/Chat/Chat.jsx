import React from "react";
import styled from "styled-components";

import more from "../../assets/images/s-icon-more-vertical.png";
import back from "../../assets/images/icon-arrow-left.png";
import profileImg from "../../assets/images/Group 26.png";

import { Body, TopBar, Chat1, Chat2, Sect1 } from "./ChatStyle";

export default function Chat() {
  return (
    <Body>
      <TopBar>
        <button>
          <img src={back} alt="" />
        </button>
        <button>
          <img src={more} alt="" />
        </button>
      </TopBar>
      <Sect1>
        <Chat1>
          <img src={profileImg} alt="프로필 이미지" />
          <div>
            <h3>애월읍 위니브 감귤농장</h3>
            <div className="text">
              {" "}
              <p>이번에 정정 언제하맨마씸?</p>
              <date>2020.10.25</date>
            </div>
          </div>
        </Chat1>
        <Chat1>
          <img src={profileImg} alt="프로필 이미지" />
          <div>
            <h3>애월읍 위니브 감귤농장</h3>
            <p>이번에 정정 언제하맨마씸?</p>
            <date>2020.10.25</date>
          </div>
        </Chat1>
        {/* <Chat2>
                    <img src={profileImg} alt="프로필 이미지" />
                    <div>
                        <h3>제주감귤마을</h3>
                        <p>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</p>
                        <date>2020.10.25</date>
                    </div>
                </Chat2> */}
      </Sect1>
    </Body>
  );
}
