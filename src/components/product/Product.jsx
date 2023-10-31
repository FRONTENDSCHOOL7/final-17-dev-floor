import React, { useEffect, useState } from "react";
import { Sect2, Sale } from "./ProductStyle";
import { useRecoilValue, useRecoilState } from "recoil";
import { accountnameState, productState } from "../../state/ProductAtom";
import { productDelApi, productListApi } from "../../api/ProductApi";
import { tokenState } from "../../state/AuthAtom";
import ModalProduct from "../modal/ModalProduct";
import { accountState } from "../../state/ModifyAtom";

export default function Product() {
  const accountName = useRecoilValue(accountState);
  const [products, setProducts] = useRecoilState(productState);
  const [modalOpen, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null); // 상품 ID를 저장
  const token = useRecoilValue(tokenState);

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
        // setProducts 함수를 사용하여 현재 products 상태에서 삭제된 상품을 제외한 새로운 배열을 설정합니다.
        // filter 함수를 사용하여 삭제된 상품의 ID와 일치하지 않는 상품만 필터링하여 새로운 배열을 생성합니다.

        setSelectedProductId(null); // 선택한 상품 ID 초기화
      } else {
        console.error("삭제할 상품이 선택되지 않았습니다.");
      }
    } catch (error) {
      console.error("상품 삭제 중 에러:", error);
    }
    setIsOpenModal(false); // 모달 닫기
  };

  useEffect(() => {
    const productList = async () => {
      try {
        const result = await productListApi(accountName, token);
        setProducts(result.product);
      } catch (error) {
        console.log("실패했습니다");
      }
    };
    productList();
  }, [accountName, setProducts]);

  return (
    <Sect2>
      <h2>판매중인 상품</h2>
      <Sale>
        {products.map((product) => (
          <div key={product.id} onClick={() => showModal(product.id)}>
            <img src={product.itemImage} alt='' />
            <p>{product.itemName}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </Sale>
      {modalOpen && (
        <ModalProduct
          setIsOpenModal={setIsOpenModal}
          handleDelete={handleDelete}
        />
      )}
    </Sect2>
  );
}
