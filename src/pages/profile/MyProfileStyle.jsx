import styled from "styled-components";

export const Body = styled.div`
  background: var(--Gray-6, #f2f2f2);
  height: 100vh;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "GongGothicMedium";
  .album-btns {
    background: #fff;
    gap: 16px;
    padding: 5px 16px;
    display: flex;
    justify-content: right;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
`;

// section 1
export const Sect1 = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
`;

export const ProImg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 41px;
  text-align: center;
  button {
    background-color: #fff;
    border-style: none;
    span {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #767676;
    }
    .followers {
      color: black;
    }
  }
  .profileImg {
    border-radius: 100px;
    width: 110px;
    height: 110px;
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
    margin-bottom: 6px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #767676;
    margin-bottom: 16px;
  }
`;

export const Btns = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  gap: 10px;
  margin-bottom: 26px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #12184e;
  }
  .modify-btn {
    color: #fff;
    padding: 8px 24px;
  }
  .register-btn {
    color: #fff;
    padding: 8px 20px;
  }
`;

// section1

// section2
export const Sect2 = styled.div`
  h2 {
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`;
