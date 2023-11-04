import React, { useState } from "react";
import { HomeFeed, Header, HomeWrap, Inner } from "./HomeStyle";
import searchImg from "../../assets/images/icon-search.png";
import TabMenu from "../../components/tab/TabMenu";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/search/SearchInput";
import Feed from "../../components/feed/Feed";

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
            <Feed />
            <TabMenu />
          </>
        )}
      </HomeFeed>
    </HomeWrap>
  );
}
