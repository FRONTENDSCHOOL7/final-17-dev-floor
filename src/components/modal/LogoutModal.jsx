import React, { useEffect, useRef } from "react";
import bar from "../../assets/images/bar.png";
import { Sect1 } from "./LogoutModalStyle";
import { useNavigate } from "react-router-dom";
import { tokenState } from "../../state/AuthAtom";
import { useRecoilState } from "recoil";
import { logoutModalState } from "../../state/ModifyAtom";

export default function SettingLogout({isSetModal, setIsSetModal}) {
    const [isModal, setIsModal] = useRecoilState(  (logoutModalState));

        const wrapperRef = useRef();
        const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            setIsSetModal(false);
        } else {
            setIsSetModal(true);
        }
    };
    const xClose = () => {
        setIsSetModal(false);
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    });
  return (
    <div ref={wrapperRef} value={isSetModal}>
        <Sect1>
            <div className="container">
            <div className="barr">
                <button className="btn" onClick={xClose}>
                <img src={bar} alt="" />
                </button>
            </div>
            <div className="letter">
                <p>설정 및 개인정보</p>
                <button onClick={() => setIsModal(true)}>로그아웃</button>
            </div>
            {isModal && <LogoutModal setIsModal={setIsModal} handleClickOutside={handleClickOutside} wrapperRef={wrapperRef} />}
            </div>
        </Sect1>
    </div>
    );
}

export function LogoutModal({ isModal, setIsModal }) {
    const [token, setToken] = useRecoilState(tokenState);
    const navigate = useNavigate();

    const xClose = () => {
        setIsModal(false);
    };


    const handleLogout = () => {
        localStorage.clear();
        setToken(null);
        navigate("/");
    };

    return (
        <div value={isModal}>
        <Sect1>
            <div className="container">
            <div className="barr">
                <button className="btn" onClick={xClose}>
                <img src={bar} alt="" />
                </button>
            </div>
            <div className="letter">
                <p>로그아웃하시겠어요?</p>
                <div className="btn">
                <button onClick={xClose}>취소</button>
                <button className="logout" onClick={handleLogout}>
                    로그아웃
                </button>
                </div>
            </div>
            </div>
        </Sect1>
        </div>
    );
}
