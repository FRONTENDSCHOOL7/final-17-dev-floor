import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accountNameState,
  profileImgState,
  tokenState,
} from "../../state/AuthAtom";
import {
  SearchBox,
  SearchInputBox,
  SearchInputInner,
  SearchPrev,
  SearchUser,
  SearchUserList,
} from "./SearchInputStyle";
import PrevImg from "../../assets/images/icon-arrow-left.png";
import Home from "../../pages/home/Home";
import TabMenu from "../tab/TabMenu";
import userProfile from "../../assets/images/Group 27.png";
import { userSearchApi } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { introState, userNameState } from "../../state/ModifyAtom";

export default function SearchInput() {
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [timer, setTimer] = useState(null);
  const [id, setId] = useRecoilState(accountNameState);
  const [intro, setIntro] = useRecoilState(introState);
  const [image, setImage] = useRecoilState(profileImgState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const token = useRecoilValue(tokenState);

  const navigate = useNavigate();

  const handleProfileClick = (
    itemAccountname,
    itemUsername,
    itemIntro,
    itemImage
  ) => {
    navigate("/profile");
    console.log("프로필 이동");
    setId(itemAccountname);
    setUserName(itemUsername);
    setIntro(itemIntro);
    setImage(itemImage);
  };

  const handleHome = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setKeyword(value);
    console.log("키워드", value);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      userResult();
    }, 500);
    setTimer(newTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const userResult = async () => {
    if (keyword) {
      const res = await userSearchApi(keyword, token);
      const readResult = res
        .filter(
          (item) =>
            item.username.includes(keyword) ||
            item.accountname.includes(keyword)
        )
        .slice(0, 10);
      setResult(readResult);
      console.log("확인", result);
      console.log("api응답", res);
    }
  };

  return (
    <>
      {showSearch ? (
        <Home />
      ) : (
        <SearchBox>
          <SearchInputBox>
            <SearchInputInner>
              <SearchPrev>
                <button type='button' onClick={handleHome}>
                  <img src={PrevImg} alt='' />
                </button>
              </SearchPrev>
              <SearchUser>
                <input
                  value={keyword}
                  onChange={handleSearchInput}
                  type='text'
                  placeholder='계정 검색'
                />
              </SearchUser>
            </SearchInputInner>
          </SearchInputBox>
          <SearchUserList>
            {result.map((item, index) => (
              <div
                key={index}
                className='userBox'
                onClick={() =>
                  handleProfileClick(
                    item.accountname,
                    item.username,
                    item.intro,
                    item.image
                  )
                }
              >
                <div className='userImg'>
                  {item.image !== "" ? (
                    <img src={item.image} alt='' />
                  ) : (
                    <img src={userProfile} alt='' />
                  )}
                </div>
                <div className='userNamePost'>
                  <div className='userPost'>
                    <p>{item.username}</p>
                  </div>
                  <div className='userName'>
                    <span>@{item.accountname}</span>
                  </div>
                </div>
              </div>
            ))}
          </SearchUserList>
          <TabMenu />
        </SearchBox>
      )}
    </>
  );
}
