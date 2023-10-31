import React, { useState } from "react";
import back from "../../assets/images/icon-arrow-left.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import { Top } from "./TopBarStyle";
import { useRecoilState } from "recoil";
import { logoutModalState } from "../../state/ModifyAtom";
import LogoutModal from "../modal/LogoutModal";

export default function TopBar() {
  const [isModal, setIsModal] = useRecoilState
  (logoutModalState)
  const handleLogoutClick = () => {
    setIsModal(true); // 로그아웃 버튼 클릭 시 모달 열기
  }
  
  // const closeModal = () => {
  //   setIsModal(false); // 모달 닫기 함수
  // }
  return (
    <Top>
      <button>
        <img src={back} alt="" />
      </button>
      <button onClick={handleLogoutClick}>
        <img src={more} alt="" />
      </button>
      {isModal && <LogoutModal setIsModal={setIsModal}/>}
    </Top>
  );
}
