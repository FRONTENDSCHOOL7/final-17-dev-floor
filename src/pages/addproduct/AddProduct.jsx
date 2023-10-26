import React, { useState, useEffect, useRef } from "react";
import { Body, Main } from "./AddProductStyle";
import TopBarSave from "../../components/topbar/TopBarSave";
import upload from "../../assets/images/upload-file.png";
import { useRecoilState } from "recoil";
import {
  productImageState,
  productNameState,
  productPriceState,
  productLinkState,
} from "../../state/ProductAtom";

export default function AddProduct() {
  const [productImage, setProductImage] = useRecoilState(productImageState);
  const [productName, setProductName] = useRecoilState(productNameState);
  const [productPrice, setProductPrice] = useRecoilState(productPriceState);
  const [productLink, setProductLink] = useRecoilState(productLinkState);

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  useEffect(() => {
    // 입력 값이 모두 채워져 있는지 확인
    if (productImage && productName && productPrice && productLink) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
  }, [productImage, productName, productPrice, productLink]);

  // input에 연결해주기 위한 useRef 훅 사용
  const imageInputRef = useRef();

  // 버튼 클릭 시 호출하는 함수 (클릭 이벤트)
  const onCickImageUploadHandler = (e) => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // 업로드한 파일
    setProductImage(file); // 이미지 상태 업데이트
  };

  const handleName = (e) => {
    setProductName(e.target.value);
  };

  // const handlePrice = (e) => {
  //   setProductPrice(e.target.value);
  // };

  const handlePrice = (e) => {
    const priceInput = e.target.value;

    // 숫자인 경우에만 "원" 단위를 뒤에 붙여 설정
    if (!isNaN(priceInput)) {
      setProductPrice(`${priceInput}원`);
    } else {
      // 숫자가 아닌 입력은 무시
      setProductPrice(priceInput);
    }
  };

  const handleLink = (e) => {
    setProductLink(e.target.value);
  };

  const handleSave = async () => {
    // 저장 버튼 클릭 이벤트
  };

  return (
    <Body>
      <TopBarSave onSave={handleSave} disabled={!isSaveEnabled} />
      <Main>
        <div className='img-container'>
          <p>이미지로 등록</p>
          <div className='img-background'>
            <button
              className='upload-img'
              onClick={() => {
                onCickImageUploadHandler();
              }}
            >
              <img src={upload} alt='' />
            </button>
            <div className='product-desc'>
              {/* <label></label> */}
              <input
                // input의 ref 속성을 이용해 버튼 클릭 이벤트를 input과 연결
                ref={imageInputRef}
                type='file'
                accept='image/*'
                // value={productImage}
                onChange={handleFileChange}
              />
              {productImage && <p>선택된 파일: {productImage.name}</p>}
              {/* <button className='upload-img'>
                <img src={upload} alt='' />
              </button> */}
            </div>
          </div>
          {/* <div className='img-background'>
              <div class="filebox">
                <input class="upload-img" />
                <label for="file"></label>
                <input type="file" id="file" />
              </div>
            </div> */}
        </div>

        <form>
          <div className='product-desc'>
            <label>상품명</label>
            <input
              type='text'
              value={productName}
              onChange={handleName}
              placeholder='2~15자 이내여야 합니다.'
              minLength='2' // 최소 길이 제한 추가
              maxLength='15' // 최대 길이 제한 추가
            />
          </div>
          <div className='product-desc'>
            <label>가격</label>
            <input
              type='text'
              value={productPrice}
              onBlur={handlePrice}
              placeholder='숫자만 입력 가능합니다.'
            />
          </div>
          <div className='product-desc'>
            <label>판매 링크</label>
            <input
              type='text'
              value={productLink}
              onChange={handleLink}
              placeholder='URL을 입력해주세요.'
            />
          </div>
        </form>
      </Main>
    </Body>
  );
}
