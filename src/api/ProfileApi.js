import axios from "axios";
import reset from "styled-reset";

const url = "https://api.mandarin.weniv.co.kr";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";

export const editApi = async (username, accountname, intro, image) => {
  
  const userInfo = {
    user: {
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };
  try {
    const res = await axios.put(url+"/user", userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert('계정 유효성 검사에 오류가 발생했습니다.');
    throw error;
  }
};

export const validateAccount = async (accountName) => {
  try {
      const response = await axios.post(url+'/user/accountnamevalid', accountName );
      if(response.data.error && response.data.includes(accountName)) {
          return false; //이미 사용중인 계정아이디
      }
      return true;
  } catch (error) {
      return false;
  }
};

export const myProfileApi = async(accountName) =>{
  try{
    const res = await axios.get(url+`/profile/:${accountName}`,{
      headers:{
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      }
    });
    return res.data
  }catch(error){
    throw error
  }
}
