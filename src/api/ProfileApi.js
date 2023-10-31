import axios from "axios";

const url = "https://api.mandarin.weniv.co.kr";

// 프로필 수정
export const editApi = async (username, accountname, intro, image, token) => {
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

export const validateAccount = async (accountname) => {
  try {
    const response = await axios.post(
      url + "/user/accountnamevalid",
      accountname
    );
    if (response.data.error && response.data.includes(accountname)) {
      return false; //이미 사용중인 계정아이디
    }
    return true;
  } catch (error) {
    return false;
  }
};

// 3.2 상대 프로필
export const profileApi = async (accountname, token) => {
  try {
    const res = await axios.get(url + `/profile/${accountname}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// 2.3 마이프로필
export const myProfileApi = async (token) => {
  try {
    // const token = localStorage.getItem("token");
    const res = await axios.get(url + "/user/myinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// 3.3 팔로우

export const followApi = async (accountname, token) => {
  try {
    const res = await axios.post(url + `/profile/${accountname}/follow`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
