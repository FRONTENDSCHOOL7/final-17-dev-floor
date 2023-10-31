import styled from "styled-components";

export const Body = styled.div`
  /* border: 3px dashed gray; */
  height: 100vh;
  width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* transform: translateX(-10%); */
`;

export const Sect1 = styled.div`
  .content-container {
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    padding: 0 15px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    .content-list {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
    .profile-img {
      width: 42px;
      height: 42px;
    }
    .content {
      display: flex;
      flex-direction: column;
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
        margin-top: 6px;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: 400;
        color: var(--767676, #767676);
      }
    }
    .content-inner {
      font-size: 14px;
      font-weight: 400;
      p {
        margin-bottom: 16px;
        line-height: 18px;
      }
      img {
        border-radius: 10px;
      }
    }
    .like-comment {
      display: flex;
      margin-top: 10px;
      button {
        display: flex;
        margin-right: 10px;
        font-size: 13px;
        align-items: center;
        span {
          display: block;
          margin-bottom: 2px;
          margin-left: 4px;
          margin-right: 4px;
          color: #c4c4c4;
        }
        img {
          width: 15px;
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
export const Sect2 = styled.div`
  .comment-container {
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    padding: 0 15px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .comment-list {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
    .profile-img {
      width: 36px;
      height: 36px;
    }
    .comment {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .comment-title {
      display: flex;
      justify-content: space-between;
    }
    .comment-id {
      display: flex;
      align-items: center;
      margin: 7px 0 16px 0;
      gap: 10px;
      h3 {
        font-size: 14px;
        font-weight: 600;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        color: var(--767676, #767676);
      }
    }
    .comment-inner {
      font-size: 14px;
      font-weight: 400;
      p {
        line-height: 18px;
      }
    }
  }
`;
export const Sect3 = styled.div`
  .comment-container {
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    padding: 0 0 12px 15px;
    display: flex;
    align-items: center;
    .comment-list {
      width: 100%;
      display: flex;
      gap: 12px;
    }
    .profile-img {
      width: 36px;
      height: 36px;
    }
    .comment-title {
      width: 100%;
      padding-bottom: 3px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        display: block;
        width: 40px;
        font-size: 14px;
        color: #c4c4c4;
      }
      input {
        display: block;
      }
      input::placeholder {
        color: #c4c4c4;
        font-size: 14px;
      }
    }
  }
`;
