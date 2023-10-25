import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "./TabMenu2Style";

export default function TabMenu2() {
  return (
    <Tab>
      <button className='btn-home'>
        <Link to='/home'>
          <p>홈</p>
        </Link>
      </button>
      <button>
        <Link to='/chat'>
          <p>채팅</p>
        </Link>
      </button>
      <button>
        <Link to='/post'>
          <p>게시물 작성</p>
        </Link>
      </button>
      <button>
        <Link to='/myprofile'>
          <p>프로필</p>
        </Link>
      </button>
    </Tab>
  );
}
