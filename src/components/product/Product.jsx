import React, { useEffect, useState } from "react";
import { Sect2, Sale } from "./ProductStyle";
import { useRecoilValue, useRecoilState } from "recoil";
import { productDelApi, productListApi } from "../../api/ProductApi";
import { accountNameState, tokenState } from "../../state/AuthAtom";
import ModalProduct from "../modal/ModalProduct";
import { useInView } from "react-intersection-observer";
import { productIdState } from "../../state/ProductAtom";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const accountName = useRecoilValue(accountNameState);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const [products, setProducts] = useState([]);
  const [modalOpen, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null); // 상품 ID를 저장
  const token = useRecoilValue(tokenState);
  const [productId, setProductId] = useRecoilState(productIdState);
  const navigate = useNavigate();

  const showModal = (productId) => {
    setIsOpenModal(true);
    setSelectedProductId(productId); // 모달에서 사용할 상품 ID 저장
    console.log(productId);
  };

  // 모달에서 삭제 버튼을 누르면 호출되는 함수
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (selectedProductId) {
        await productDelApi(selectedProductId, token); // 선택한 상품 ID를 사용하여 삭제 API 호출
        console.log(`ID가 ${selectedProductId}인 상품이 삭제되었습니다.`);
        // 삭제된 상품의 정보를 함께 지우기
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== selectedProductId)
        );

        setSelectedProductId(null); // 선택한 상품 ID 초기화
      } else {
        console.error("삭제할 상품이 선택되지 않았습니다.");
      }
    } catch (error) {
      console.error("상품 삭제 중 에러:", error);
    }
    setIsOpenModal(false); // 모달 닫기
  };
  // 상품 수정
  const handleEdit = () => {
    setProductId(selectedProductId);
    navigate("/product");
  };
  // 유저 상품 목록 api 요청
  const productList = async () => {
    try {
      console.log("어카운트네임", accountName);
      const result = await productListApi(accountName, token, skip);

      console.log("@@@");
      console.log(result.product);
      console.log(products);
      console.log("배열추가성공");

      setProducts((products) => {
        return [...products, ...result.product];
      });
      setSkip((skip) => skip + 5);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // iinView && !isend가 true 일 때만 데이터를 불러옴!
  // 페이지 시작 시 렌더링
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      productList();
    }
  }, [inView]);

  return (
    <Sect2>
      <h2>개발템 이런건 어때요?</h2>
      <Sale>
        {products?.map((product, idx) => (
          <div key={idx} onClick={() => showModal(product.id)}>
            <img src={product.itemImage} alt='' />
            <p>{product.itemName}</p>
            <span>{product.price && product.price + "원"}</span>
          </div>
        ))}
        <div ref={ref}></div>
      </Sale>
      {modalOpen && (
        <ModalProduct
          handleEdit={handleEdit}
          setIsOpenModal={setIsOpenModal}
          handleDelete={handleDelete}
          productLink={
            products?.find((product) => product.id === selectedProductId)?.link
          }
        />
      )}
    </Sect2>
  );
}
