import axios from "axios";
import reset from "styled-reset";

const url = "https://api.mandarin.weniv.co.kr";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";

const token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2I0YzJiYjJjYjIwNTY2Mzg5NzgwYyIsImV4cCI6MTcwMzU2OTAyOSwiaWF0IjoxNjk4Mzg1MDI5fQ.ECwbzvxAySetIODrAGlVKrvkJ_80Z3wi2I5uSl5B7Vg";

// 프로필 수정
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
    const res = await axios.put(url + "/user", userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("계정 유효성 검사에 오류가 발생했습니다.");
    throw error;
  }
};

export const validateAccount = async (accountName) => {
  try {
    const response = await axios.post(
      url + "/user/accountnamevalid",
      accountName
    );
    if (response.data.error && response.data.includes(accountName)) {
      return false; //이미 사용중인 계정아이디
    }
    return true;
  } catch (error) {
    return false;
  }
};

// 3.2 상대 프로필
export const profileApi = async (accountName) => {
  try {
    const res = await axios.get(url + `/profile/${accountName}`, {
      headers: {
        Authorization: `Bearer ${token2}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// 2.3 마이프로필
export const myProfileApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(url + "/user/myinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
