import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab } from "./TabMenuStyle";
import { ReactComponent as Home } from "../../assets/images/icon-home.svg";
import { ReactComponent as Chat } from "../../assets/images/icon-message-circle.svg";
import { ReactComponent as Post } from "../../assets/images/icon-edit.svg";
import { ReactComponent as Profile } from "../../assets/images/icon-user.svg";
import { myProfileApi } from "../../api/ProfileApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountNameState } from "../../state/AuthAtom";
import { postIdState } from "../../state/PostAtom";

export default function TabMenu() {
  const nav = useNavigate();
  const uselocation = useLocation();
  const [imgColor, setImgColor] = useState(uselocation.pathname.toLowerCase());
  const [accountName, setAccountName] = useRecoilState(accountNameState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const post = useRecoilValue(postIdState);

  const changeColor = (e) => {
    nav(`/${e}`);
    setImgColor(e);
    if (`/${e}` === "/homefeed") {
      setImgColor(`/${e}`);
    } else if (`/${e}` === "/chat") {
      setImgColor(`/${e}`);
    } else if (`/${e}` === "/postwrite") {
      setImgColor(`/${e}`);
      setPostId("");
    } else if (`/${e}` === "/myprofile") {
      setImgColor(`/${e}`);
      // setAccountName(localStorage.getItem("account"));
    }
  };

  return (
    <Tab>
      <button onClick={() => changeColor("homefeed")}>
        <Home
          fill={imgColor === "/homefeed" ? "#12184E" : "#fff"}
          stroke={imgColor === "/homefeed" ? "#12184E" : "#767676"}
        />
        <p style={{ color: imgColor === "/homefeed" ? "#12184E" : "#767676" }}>
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
      <button onClick={() => changeColor("postwrite")}>
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
