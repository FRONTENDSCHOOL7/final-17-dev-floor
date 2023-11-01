import React from "react";
import { AlbumImg } from "./PostAlbumStyle";
import { useState } from "react";
import { useEffect } from "react";
import { postUserApi } from "../../api/PostApi";
import { useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import { tokenState } from "../../state/AuthAtom";
import { accountNameState } from "../../state/AuthAtom";

export default function PostAlbum() {
  const accounName = useRecoilValue(accountNameState);
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  // 유저 게시글 목록 api 요청
  const postFetch = async () => {
    try {
      const result = await postUserApi(accounName, token, skip);
      console.log("@@@");
      console.log(result.post);
      console.log(postData);
      if (!postData.includes(result.post)) {
        console.log("배열추가성공");
        setPostData((postData) => {
          return [...postData, ...result.post];
        });
        setSkip((skip) => skip + 10);
      }
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // 맨 처음 렌더링 되었을 때 데이터를 한번 불러옴!
  useEffect(() => {
    postFetch();
  }, []);

  // isView가 true 일 때만 데이터를 불러옴!
  // 보였다 안보이면 true에서 false로 바뀌기 때문에 useEffect가 두번 실행됨!
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  console.log(postData);
  return (
    <AlbumImg>
      {postData?.map((item) => {
        return (
          <div>
            <img src={item.image} alt='' />
          </div>
        );
      })}
      <div ref={ref}></div>
    </AlbumImg>
  );
}
