import React from "react";
import { Body, Main } from "./AddProductStyle";
import profileImg from "../../assets/images/Group 26.png";
import TopBarSave from "../../components/topbar/TopBarSave";

export default function AddProduct() {
  return (
    <Body>
      <TopBarSave />
      <Main>
        <button className="upload-img">
          <img src={profileImg} alt="" />
        </button>
        <form>
          <div>
            <label>상품명</label>
            <input type="text" placeholder="2~15자 이내여야 합니다." />
          </div>
          <div>
            <label>가격</label>
            <input type="number" placeholder="숫자만 입력 가능합니다." />
          </div>
          <div>
            <label>판매 링크</label>
            <input type="text" placeholder="URL을 입력해주세요." />
          </div>
        </form>
      </Main>
    </Body>
  );
}
