import React, { useState, useEffect, useRef } from "react";
import { Body, Main } from "./AddProductStyle";
import TopBarSave from "../../components/topbar/TopBarSave";
import upload from "../../assets/images/upload-file.png";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productImageState,
  productNameState,
  productPriceState,
  productLinkState,
  productIdState,
} from "../../state/ProductAtom";
import { apiImageState } from "../../state/ModifyAtom";
import {
  imageApi,
  productApi,
  productDetailApi,
  productEditApi,
} from "../../api/ProductApi";
import { useNavigate } from "react-router-dom";
import { tokenState } from "../../state/AuthAtom";

export default function AddProduct() {
  const [productImage, setProductImage] = useState([]);
  const [productName, setProductName] = useRecoilState(productNameState);
  const [productPrice, setProductPrice] = useRecoilState(productPriceState);
  const [productLink, setProductLink] = useRecoilState(productLinkState);
  const [apiImage, setApiImage] = useRecoilState(apiImageState);
  const productId = useRecoilValue(productIdState);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [isEdit, setIsEdit] = useState([]);
  const fileRef = useRef(null);
  const token = useRecoilValue(tokenState);
  const navigate = useNavigate();
  console.log(productId);

  useEffect(() => {
    // 입력 값이 모두 채워져 있는지 확인
    if (productImage && productName && productPrice && productLink) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
    if (productId) {
      productFetch();
    }
  }, [productImage, productName, productPrice, productLink]);

  const onClickImage = (e) => {
    fileRef.current?.click(e.target.files?.[0]);
  };

  const onChangeFile = async (e) => {
    // 이미지 미리보기
    const file = fileRef.current.files[0];
    setProductImage(file); // 실제 업로드할 파일 저장
    // 이미지 api 필요 값 입력
    try {
      const result = await imageApi(file);
      setApiImage("https://api.mandarin.weniv.co.kr/" + result.filename);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("productImg", productImage);

  const handleName = (e) => {
    setProductName(e.target.value);
  };

  const handlePrice = (e) => {
    const value = e.target.value.replace("원", "");
    // 입력된 값이 숫자인 경우에만 상태 업데이트
    if (!isNaN(value)) {
      setProductPrice(value);
    }
  };

  const handleLink = (e) => {
    setProductLink(e.target.value);
  };

  const validateInputs = () => {
    // 필수 입력 사항 체크
    if (!productImage || !productName || !productPrice || !productLink) {
      return false;
    }
    return true;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      // 필수 입력사항을 입력하지 않았을 때
      alert("필수 입력사항을 입력해주세요.");
      return;
    }

    if (isNaN(productPrice)) {
      // 가격을 숫자로 입력하지 않았을 때
      alert("가격은 숫자로 입력하셔야 합니다.");
      return;
    }

    const priceAsNumber = Number(productPrice.replace("원", ""));

    try {
      // API 요청
      const res = await productApi(
        productName,
        priceAsNumber,
        productLink,
        apiImage,
        token
      );

      // API 요청 성공 시
      console.log("상품 등록 성공:", res);
      setProductImage(res.product.itemImage);
      setProductName(res.product.itemName);
      setProductPrice(res.product.price);
      setProductLink(res.product.link);
      navigate("/myprofile");
    } catch (error) {
      // API 요청 실패 시
      console.log("상품 등록 실패:", error);
    }
  };

  // 상품 수정
  const handleEdit = async () => {
    try {
      const res = await productEditApi(
        productId,
        productName,
        productLink,
        apiImage,
        productPrice,
        token
      );
    } catch (error) {
      console.error("상품수정실패", error);
    }
    navigate("/myprofile");
  };
  // 상품 상세
  const productFetch = async () => {
    const res = await productDetailApi(productId, token);
    setIsEdit(res.product);
  };

  return (
    <Body>
      <TopBarSave
        isEdit={isEdit}
        onSave={JSON.stringify(isEdit) !== "[]" ? handleEdit : handleSave}
        disabled={!isSaveEnabled}
      />
      <Main>
        <div className='img-container'>
          <p>이미지로 등록</p>
          <div className='img-background'>
            <input
              style={{ display: "none" }}
              type='file'
              onChange={onChangeFile}
              ref={fileRef}
            />
            <div>
              {productImage.length === 0 && isEdit?.itemImage ? (
                <img className='previewimage' src={isEdit.itemImage} />
              ) : (
                productImage instanceof File && (
                  <img
                    className='previewimage'
                    src={URL.createObjectURL(productImage)}
                    alt='preview'
                  />
                )
              )}
            </div>
            <div className='buttonbox'>
              <button className='send' onClick={onClickImage}>
                <img src={upload} alt='' className='profile-img' />
              </button>
            </div>
          </div>
        </div>
        <form>
          <div className='product-desc'>
            <label>상품명</label>
            <input
              type='text'
              onChange={handleName}
              placeholder='2~15자 이내여야 합니다.'
              minLength='2'
              maxLength='15'
              defaultValue={isEdit.itemName}
            />
          </div>
          <div className='product-desc'>
            <label>가격</label>
            <input
              type='text'
              defaultValue={isEdit.price}
              onChange={handlePrice}
              placeholder='숫자만 입력 가능합니다.'
            />
          </div>
          <div className='product-desc'>
            <label>판매 링크</label>
            <input
              type='text'
              defaultValue={isEdit.link}
              onChange={handleLink}
              placeholder='URL을 입력해주세요.'
            />
          </div>
        </form>
      </Main>
    </Body>
  );
}
