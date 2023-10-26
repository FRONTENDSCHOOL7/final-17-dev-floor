// import axios from "axios";

// const url = 'https://api.mandarin.weniv.co.kr/product';

// export const productApi = async (itemName, price, link, itemImage) => {
//     const addproduct = {
//         'product': {
//             'itemName': itemName,
//             'price': price,
//             'link': link,
//             'itemImage': itemImage
//         }
//     };

//     try {
//         const response = await axios.post(url, addproduct, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };