import axios from "axios";

const url = "https://api.mandarin.weniv.co.kr/user";

export const editApi = async (username, accountname, intro, image) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";
  const userInfo = {
    user: {
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };
  try {
    const res = await axios.put(url, userInfo, {
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
