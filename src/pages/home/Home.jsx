import React, { useState } from "react";
import { HomeFeed, Header, HomeWrap, HomeSearch, Inner } from "./HomeStyle";
import searchImg from "../../assets/images/icon-search.png";
import logoUser from "../../assets/images/Group 24.png";
import TabMenu from "../../components/tab/TabMenu";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/search/SearchInput";
import TabMenu2 from "../../components/tab/TabMenu2";

export default function Home() {
  const navigate = useNavigate();
  const [searchModal, setSearchModal] = useState(false);

  const handleSearch = () => {
    setSearchModal(!searchModal);
  };
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
            <TabMenu2 />
          </>
        )}
      </HomeFeed>
    </HomeWrap>
  );
}
