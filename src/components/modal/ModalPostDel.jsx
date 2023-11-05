import React, { useEffect, useRef } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";

export default function ModalPostDel({
  isOpenModal,
  children,
  handlePostDel,
  goToPostCorrection,
  setIsOpenModal
}) {
  const wrapperRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpenModal(false)
    } else {
      setIsOpenModal(true)
    }
  };

  const xClose = () => {
    setIsOpenModal(false)
  };
  return (
    <div ref={wrapperRef} value={isOpenModal}>
      {children}
      <Sect1>
        <div className='container'>
          <div className='barr'>
            <button className='btn' onClick={xClose}>
              <img src={bar} alt='' />
            </button>
          </div>
          <div className='letter' onClick={handlePostDel}>
            <button>삭제</button>
          </div>
          <div className='letter' onClick={goToPostCorrection}>
            <button>수정</button>
          </div>
        </div>
      </Sect1>
    </div>
  );
}
