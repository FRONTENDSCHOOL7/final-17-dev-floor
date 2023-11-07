import axios from "axios";

const url = "https://api.mandarin.weniv.co.kr/product";
const url2 = "https://api.mandarin.weniv.co.kr/image/uploadfile";

export const productApi = async (itemName, price, link, itemImage, token) => {
  const productData = {
    product: {
      itemName: itemName,
      price: price, //1원 이상
      link: link,
      itemImage: itemImage,
    },
  };
  try {
    const res = await axios.post(url, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};

export const imageApi = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const res = await axios.post(url2, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};

export const productListApi = async (accountName, token, skip) => {
  try {
    const res = await axios.get(url + `/${accountName}/?limit=5&skip=${skip}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};

export const productDelApi = async (product_id, token) => {
  try {
    const res = await axios.delete(url + `/${product_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const productEditApi = async (productId, productName,
  productLink,
  apiImage,
  productPrice,
  token) => {
  const productData = {
    product: {
      itemName: productName,
      price: productPrice, //1원 이상
      link: productLink,
      itemImage: apiImage,
    },
  };
  try {
    const res = await axios.put(url+`/${productId}`, productData,{
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};
// 상품 상세
export const productDetailApi = async (product_id, token) => {
  try {
    const res = await axios.get(url + `/detail/${product_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log('res',res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
