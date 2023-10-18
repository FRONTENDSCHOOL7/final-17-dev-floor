import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  /* transform: translateX(-10%); */
`;

// section 1
export const Sect1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
`;

export const ProImg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 41px;
  text-align: center;
  div {
    span {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #767676;
    }
  }
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #767676;
    margin-top: 3px;
  }
`;

export const Btns = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  gap: 10px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-follow {
    background: #3c48ae;
    color: #fff;
    width: 120px;
  }
`;

// section1

// section2
export const Sect2 = styled.div`
  border: 3px solid red;
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Sale = styled.div`
  display: flex;
  gap: 10px;
  overflow: scroll;
  img {
    width: 140px;
    height: 90px;
  }
  p {
    margin-top: 6px;
    height: 6px;
    font-size: 14px;
    font-weight: 400;
  }
  span {
    font-size: 12px;
    font-weight: 700;
    color: #cb9367;
  }
`;
// section 2

// section 3

export const Sect3 = styled.div`
  .album-btns {
    display: flex;
    justify-content: right;
  }
  button {
    background: #fff;
    border: none;
  }
`;
