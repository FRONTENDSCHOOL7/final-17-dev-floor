import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab } from "./TabMenuStyle";
import { ReactComponent as Home } from "../../assets/images/icon-home.svg";
import { ReactComponent as Chat } from "../../assets/images/icon-message-circle.svg";
import { ReactComponent as Post } from "../../assets/images/icon-edit.svg";
import { ReactComponent as Profile } from "../../assets/images/icon-user.svg";

export default function TabMenu() {
  const nav = useNavigate();
  const uselocation = useLocation();
  const [imgColor, setImgColor] = useState(uselocation.pathname.toLowerCase());

  const changeColor = (e) => {
    nav(`/${e}`);
    setImgColor(e);
    if (`/${e}` === "/home") {
      setImgColor(`/${e}`);
    } else if (`/${e}` === "/chat") {
      setImgColor(`/${e}`);
    } else if (`/${e}` === "/post") {
      setImgColor(`/${e}`);
    } else if (`/${e}` === "/myprofile") {
      setImgColor(`/${e}`);
    }
  };
  return (
    <Tab>
      <button onClick={() => changeColor("home")}>
        <Home
          fill={imgColor === "/home" ? "#12184E" : "#fff"}
          stroke={imgColor === "/home" ? "#12184E" : "#767676"}
        />
        <p style={{ color: imgColor === "/home" ? "#12184E" : "#767676" }}>
          홈
        </p>
      </button>
      <button onClick={() => changeColor("chat")}>
        <Chat
          fill={imgColor === "/chat" ? "#12184E" : "#fff"}
          stroke={imgColor === "/chat" ? "#12184E" : "#767676"}
        />
        <p style={{ color: imgColor === "/chat" ? "#12184E" : "#767676" }}>
          채팅
        </p>
      </button>
      <button onClick={() => changeColor("post")}>
        <Post
          fill={imgColor === "/post" ? "#12184E" : "#fff"}
          stroke={imgColor === "/post" ? "#12184E" : "#767676"}
        />
        <p style={{ color: imgColor === "/post" ? "#12184E" : "#767676" }}>
          게시물 작성
        </p>
      </button>
      <button onClick={() => changeColor("myprofile")}>
        <Profile
          fill={imgColor === "/myprofile" ? "#12184E" : "#fff"}
          stroke={imgColor === "/myprofile" ? "#12184E" : "#767676"}
        />
        <p style={{ color: imgColor === "/myprofile" ? "#12184E" : "#767676" }}>
          프로필
        </p>
      </button>
    </Tab>
  );
}
