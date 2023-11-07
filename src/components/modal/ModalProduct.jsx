import React, { useEffect, useRef } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";
import { Link } from "react-router-dom";

export default function ModalProduct({
  isOpenModal,
  setIsOpenModal,
  children,
  handleDelete,
  productLink
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
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  const xClose = () => {
    setIsOpenModal(false);
  };

  const viewOnWebsite = () => {
    window.open(productLink); // 웹사이트에서 상품 보기 버튼을 클릭하면 productLink로 이동합니다.
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
          <div className='letter' onClick={handleDelete}>
            <button>삭제</button>
          </div>
          <div className='letter'>
            <Link to='/editproduct'>수정</Link>
          </div>
          <div className='letter'>
            <button onClick={viewOnWebsite}>웹사이트에서 상품 보기</button>
          </div>
        </div>
      </Sect1>
    </div>
  );
}
