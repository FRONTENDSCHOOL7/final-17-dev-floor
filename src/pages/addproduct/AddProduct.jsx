import React, { useState, useEffect, useRef } from "react";
import { Body, Main } from "./AddProductStyle";
import TopBarSave from "../../components/topbar/TopBarSave";
import upload from "../../assets/images/upload-file.png";
import { useRecoilState } from "recoil";
import {
  productImageState,
  productNameState,
  productPriceState,
  productLinkState
} from "../../state/ProductAtom";
import { imageApi, productApi } from "../../api/ProductApi";
import { useNavigate } from "react-router-dom";



export default function AddProduct() {
  const [productImage, setProductImage] = useRecoilState(productImageState);
  const [productName, setProductName] = useRecoilState(productNameState);
  const [productPrice, setProductPrice] = useRecoilState(productPriceState);
  const [productLink, setProductLink] = useRecoilState(productLinkState);
  const [previewImage, setPreviewImage] = useState(null);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 입력 값이 모두 채워져 있는지 확인
    if (productImage && productName && productPrice && productLink) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
  }, [productImage, productName, productPrice, productLink]);

  // // input에 연결해주기 위한 useRef 훅 사용
  // const imageInputRef = useRef();

  // // 버튼 클릭 시 호출하는 함수 (클릭 이벤트)
  // const onCickImageUploadHandler = (e) => {
  //   imageInputRef.current?.click();
  // };

  const onClickImage = (e) => {
    fileRef.current?.click(e.target.files?.[0]);
  };

  const onChangeFile = async (e) => {
    // 이미지 미리보기
    const file = e.target.files[0];
    setProductImage(file); // 실제 업로드할 파일 저장

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result); // 미리보기용 URL 저장
    };
    // 이미지 api 필요 값 입력
    try {
      const result = await imageApi(file);
      console.log(result);
      setProductImage(result.filename);
      console.log("성공했습니다");
    } catch (error) {
      console.log(error);
    }
  };

// const handleFileChange = (e) => {
//     const file = e.target.files[0]; // 업로드한 파일
//     const form = new FormData();
//     form.append("image", file);
//     axios.post("https://api.mandarin.weniv.co.kr/image/uploadfile", form,{
//     headers: {
//       "Content-Type": "multipart/form-data",
//       "Authorization": `Bearer ${token}`
//     },
//   }).then(res=>setProductImage("https://api.mandarin.weniv.co.kr/"+res.data.filename))
//     // setProductImage(file); // 이미지 상태 업데이트
//   };

  // 명세 제대로 읽기!!

  const handleName = (e) => {
    setProductName(e.target.value);
  };

  const handlePrice = (e) => {
    setProductPrice(e.target.value);
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

    try {
      const res = await productApi(productName,parseFloat(productPrice),productLink,productImage);
      // const response = await axios.post( {
      //   product: {
      //     itemName: productName,
      //     price: parseFloat(productPrice),
      //     link: productLink,
      //     itemImage: productImage,
      //   },
      // });

      // API 요청 성공 시
      // const productData = response.data.product;
      console.log("상품 등록 성공:", res);
    } catch (error) {
  //     // API 요청 실패 시
      console.log("상품 등록 실패:", error);
    }
  };

  return (
    <Body>
      <TopBarSave onSave={handleSave} disabled={!isSaveEnabled} />
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
            <div>{previewImage && <img className='previewimage' src={previewImage} alt='preview'></img>}</div>
            <div className='buttonbox'>            
            <button className='send' onClick={onClickImage}>
            <img src={upload} alt='' className='profile-img' />
            </button>
            </div>
            {/* <button className='upload-img' onClick={onCickImageUploadHandler}>
              <img src={upload} alt='' />
            </button> */}
            {/* <div className="product-desc">
              <input
                ref={imageInputRef}
                type='file'
                accept='image/*'
                // value={productImage}
                onChange={handleFileChange}
              /> */}
          </div>
        </div>
        <form>
          <div className='product-desc'>
            <label>상품명</label>
            <input
              type='text'
              // value={productName}
              onChange={handleName}
              placeholder="2~15자 이내여야 합니다."
              minLength="2"
              maxLength="15"
            />
          </div>
          <div className='product-desc'>
            <label>가격</label>
            <input
              type='text'
              value={productPrice}
              onChange={handlePrice}
              placeholder='숫자만 입력 가능합니다.'
            />
          </div>
          <div className='product-desc'>
            <label>판매 링크</label>
            <input
              type='text'
              // value={productLink}
              onChange={handleLink}
              placeholder='URL을 입력해주세요.'
            />
          </div>
        </form>
      </Main>
    </Body>
  );
}