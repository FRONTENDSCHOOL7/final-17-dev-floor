import styled from "styled-components";

export const Body = styled.div`
  /* border: 3px dashed gray; */
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
  .modify-btn {
    color: #767676;
    padding: 15px 24px;
  }
  .register-btn {
    color: var(--767676, #767676);
    padding: 10px 20px;
  }
`;

// section1

// section2
export const Sect2 = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Sale = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
  button {
    background: #fff;
    border: none;
  }
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .content-container {
    height: 500px;
    overflow-y: scroll;
    overflow-x: visible;
    display: flex;
    flex-direction: column;
    margin: 16px 16px 0;
    .content-list {
      display: flex;
      gap: 12px;
    }
    .profile-img {
      width: 42px;
      height: 42px;
    }
    .content-title {
      display: flex;
      justify-content: space-between;
    }
    .content-id {
      h3 {
        margin-top: 2px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 600;
      }
      p {
        margin-top: 0;
        font-size: 12px;
        font-weight: 400;
        color: var(--767676, #767676);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    .content-inner {
      font-size: 14px;
      font-weight: 400;
    }
    .like-comment {
      display: flex;
      button {
        display: flex;
        align-items: center;
        span {
          margin-left: 4px;
          color: #767676;
        }
      }
    }
    .date {
      margin-top: 20px;
      color: #767676;
      font-size: 10px;
      font-weight: 400;
    }
  }
`;
