import React from "react";
import { Body, Main } from "./AddProductStyle";
import TopBarSave from "../../components/topbar/TopBarSave";
import upload from "../../assets/images/upload-file.png";

export default function AddProduct() {
  return (
    <Body>
      <TopBarSave />
      <Main>
        <div className='img-container'>
          <p>이미지로 등록</p>
          <div className='img-background'>
            <button className='upload-img'>
              <img src={upload} alt='' />
            </button>
          </div>
        </div>

        <form>
          <div className='product-desc'>
            <label>상품명</label>
            <input type='text' placeholder='2~15자 이내여야 합니다.' />
          </div>
          <div className='product-desc'>
            <label>가격</label>
            <input type='number' placeholder='숫자만 입력 가능합니다.' />
          </div>
          <div className='product-desc'>
            <label>판매 링크</label>
            <input type='text' placeholder='URL을 입력해주세요.' />
          </div>
        </form>
      </Main>
    </Body>
  );
}
