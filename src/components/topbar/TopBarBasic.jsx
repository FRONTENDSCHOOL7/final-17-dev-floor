import React, { useState } from "react";
import back from "../../assets/images/icon-arrow-left.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import { Top } from "./TopBarStyle";
import SettingLogout from "../modal/LogoutModal";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [isSetModal, setIsSetModal] = useState(false);


  const handleLogoutClick = () => {
    setIsSetModal(true); // 로그아웃 버튼 클릭 시 모달 열기
  }
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  
  // const closeModal = () => {
  //   setIsModal(false); // 모달 닫기 함수
  // }
  return (
    <Top>
      <button onClick={handleBack}>
        <img src={back} alt="" />
      </button>
      <button className='modalBtn' onClick={handleLogoutClick}>
        <img src={more} alt="" />
      </button>
      {isSetModal && <SettingLogout setIsSetModal={setIsSetModal}/>}
    </Top>
  );
}
