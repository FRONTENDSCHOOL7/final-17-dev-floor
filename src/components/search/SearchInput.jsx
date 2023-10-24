import React, { useState } from 'react'
import { SearchBox, SearchInputBox, SearchInputInner, SearchPrev, SearchUser, SearchUserList,  } from './SearchInputStyle'
import PrevImg from '../../assets/images/icon-arrow-left.png'
import { useNavigate } from 'react-router-dom'
import Home from '../../pages/home/Home'
import TabMenu from '../tab/TabMenu'
import userProfile from '../../assets/images/basic-profile.png'

export default function SearchInput() {
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const handleHome = () => {
        setShowSearch(!showSearch)
    }
    const handleSearchInput = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <>
            {showSearch ? <Home/> : (<SearchBox>
                <SearchInputBox>
                    <SearchInputInner>
                        <SearchPrev>
                            <button type='button' onClick={handleHome}>
                                <img src={PrevImg} alt="" />
                            </button>
                        </SearchPrev>
                        <SearchUser>
                            <input 
                            value={searchValue} 
                            onChange={handleSearchInput} 
                            type="text"
                            placeholder='계정 검색'/>
                        </SearchUser>
                    </SearchInputInner>
                </SearchInputBox>
                <SearchUserList>
                    <div className="userBox">
                        <div className="userImg">
                            <img src={userProfile} alt="" />
                        </div>
                        <div className="userNamePost">
                            <div className="userPost">
                                <p>{searchValue}</p>
                            </div>
                            <div className="userName">
                                <span>@ dev_floor</span>
                            </div>
                        </div>
                    </div>
                </SearchUserList>
                <TabMenu/>
            </SearchBox>)}
        </>
    )
}
