import React from "react";
import more from "../../assets/images/s-icon-more-vertical.png";
import like from "../../assets/images/icon-heart.png";
import profileImg from "../../assets/images/Group 26.png";
import message from "../../assets/images/icon-message-circle.png";

import { Sect3 } from "./PostListStyle";
import { tokenState } from "../../state/AuthAtom";

export default function PostList() {
  return (
    <Sect3>
      {/* <div className='album-btns'>
        <button>
          <img src={hamburger} alt='' />
        </button>
        <button>
          <img src={album} alt='' />
        </button>
      </div> */}
      {/* 게시글 목록 */}
      <div className='content-container'>
        {/* 게시글 한개 */}
        <div className='content-list'>
          <img src={profileImg} alt='' className='profile-img' />
          <div className='content'>
            <div className='content-title'>
              <div className='content-id'>
                <h3>애월읍 위니브 감귤농장</h3>
                <p>@ weniv_Mandarin</p>
              </div>
              <div className="imgBox">
                <button>
                  <img src={more} alt='' />
                </button>
              </div>
            </div>
            <div className='content-inner'>
              <p>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <img src='https://via.placeholder.com/304x228' alt='' />
            </div>
            <div className='like-comment'>
              <button>
                <img src={like} alt='' /> <span>58</span>
              </button>
              <button>
                <img src={message} alt='' /> <span>12</span>
              </button>
            </div>
            <span className='date'>2020년 10월 21일</span>
          </div>
        </div>
        {/* //게시글 한개 */}
        {/* 게시글 한개 */}
        <div className='content-list'>
          <img src={profileImg} alt='' className='profile-img' />
          <div className='content'>
            <div className='content-title'>
              <div className='content-id'>
                <h3>애월읍 위니브 감귤농장</h3>
                <p>@ weniv_Mandarin</p>
              </div>
              <div>
                <button>
                  <img src={more} alt='' />
                </button>
              </div>
            </div>
            <div className='content-inner'>
              <p>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <img src='https://via.placeholder.com/304x228' alt='' />
            </div>
            <div className='like-comment'>
              <button>
                <img src={like} alt='' /> <span>58</span>
              </button>
              <button>
                <img src={message} alt='' /> <span>12</span>
              </button>
            </div>
            <span className='date'>2020년 10월 21일</span>
          </div>
        </div>
        {/* //게시글 한개 */}
        {/* 게시글 한개 */}
        <div className='content-list'>
          <img src={profileImg} alt='' className='profile-img' />
          <div className='content'>
            <div className='content-title'>
              <div className='content-id'>
                <h3>애월읍 위니브 감귤농장</h3>
                <p>@ weniv_Mandarin</p>
              </div>
              <div>
                <button>
                  <img src={more} alt='' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={ref}>안녕</div>;
    </Sect3>
  );
}