import React, { useState, useEffect } from "react";
import { HomeFeed, Header, HomeWrap, HomeSearch, Inner } from "./HomeStyle";
import searchImg from "../../assets/images/icon-search.png";
import logoUser from "../../assets/images/Group 24.png";
import TabMenu from "../../components/tab/TabMenu";
import { useNavigate } from "react-router-dom";
import { tokenState } from "../../state/AuthAtom";
import SearchInput from "../../components/search/SearchInput";
import Feed from "../../components/feed/Feed";
import { postGet } from "../../api/PostApi";
import { useRecoilValue } from "recoil";

export default function Home() {
  const navigate = useNavigate();
  const [searchModal, setSearchModal] = useState(false);
  const [postData, setPostData] = useState([]);
  const token = useRecoilValue(tokenState);
  const skip = 0;
  const handleSearch = () => {
    setSearchModal(!searchModal);
  };

  const postFetch = async () => {
    try {
      const result = await postGet(token, skip);
      console.log("데이터 확인", result);
      setPostData(result.posts);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  useEffect(() => {
    postFetch();
  }, []);

  return (
    <HomeWrap>
      <HomeFeed>
        {searchModal ? (
          <SearchInput />
        ) : (
          <>
            <Header>
              <Inner>
                <h2>개발바닥 피드</h2>
                <div className='search'>
                  <button type='button' onClick={handleSearch}>
                    <img src={searchImg} alt='' />
                  </button>
                </div>
              </Inner>
            </Header>
            {postData?.length === 0 ? (
              <HomeSearch>
                <div className='inner'>
                  <div className='logoSymbol'>
                    <img src={logoUser} alt='' />
                  </div>
                  <p>유저를 검색해 팔로우 해보세요!</p>
                  <div className='searchBtn' onClick={handleSearch}>
                    <button type='button'>검색하기</button>
                  </div>
                </div>
              </HomeSearch>
            ) : (
              <Feed />
            )}
            <TabMenu />
          </>
        )}
      </HomeFeed>
    </HomeWrap>
  );
}
