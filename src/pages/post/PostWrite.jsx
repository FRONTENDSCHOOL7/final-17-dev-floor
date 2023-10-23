import React from "react";
import profileImg from "../../assets/images/Group 26.png";
import back from "../../assets/images/icon-arrow-left.png";
import upload from "../../assets/images/upload-file.png";
import { Body, Sect1, Sect2 } from "./PostWriteStyle";

export default function PostWrite() {
  return (
    <Body>
      <Sect1>
        <button>
          <img src={back} alt='' />
        </button>
        <button className='upload'>업로드</button>
      </Sect1>
      <Sect2>
        <div className='write-main'>
          <img src={profileImg} alt='' className='profile-img' />
          <textarea placeholder='게시글 입력하기...' />
        </div>
        <div className='write-bottom'>
          <button className='send'>
            <img src={upload} alt='' className='profile-img' />
          </button>
        </div>
      </Sect2>
    </Body>
  );
}
