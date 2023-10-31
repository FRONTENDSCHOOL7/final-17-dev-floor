import React, { useEffect, useRef } from "react";
import bar from "../../assets/images/bar.png";
import { Sect1 } from "./LogoutModalStyle";
import { useNavigate } from "react-router-dom";
import { tokenState } from "../../state/AuthAtom";
import { useRecoilState } from "recoil";

export default function LogoutModal({ isModal, setIsModal, children }) {
  const wrapperRef = useRef();
  const [token, setToken] = useRecoilState(tokenState);

  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsModal(false);
    } else {
      setIsModal(true);
    }
  };

  const xClose = () => {
    setIsModal(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    navigate("/");
  };

  return (
    <div ref={wrapperRef} value={isModal}>
      {children}
      <Sect1>
        <div className='container'>
          <div className='barr'>
            <button className='btn' onClick={xClose}>
              <img src={bar} alt='' />
            </button>
          </div>
          <div className='letter'>
            <p>로그아웃하시겠어요?</p>
            <button onClick={xClose}>취소</button>
            <button onClick={handleLogout}>삭제</button>
          </div>
        </div>
      </Sect1>
    </div>
  );
}
