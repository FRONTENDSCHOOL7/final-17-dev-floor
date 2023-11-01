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

  // 유저 게시글 목록 api 요청
  const postFetch = async () => {
    try {
      console.log("토큰", token);
      console.log("어카운트네임", accounName);
      const result = await postUserApi(accounName, token, skip);

      console.log("@@@");
      console.log(result.post);
      console.log(postData);

      setPostData((postData) => {
        return [...postData, ...result.post];
      });
      setSkip((skip) => skip + 13);
    } catch (error) {
      console.log("실패했습니다");
    }
  };

  // iinView && !isend가 true 일 때만 데이터를 불러옴!
  // 페이지 시작 시 렌더링
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  console.log(postData);
  return (
    <AlbumImg>
      {postData?.map((item, idx) => {
        return (
          <div key={idx}>
            <img src={item.image} alt='' />
          </div>
        );
      })}
      <div ref={ref}></div>
    </AlbumImg>
  );
}
