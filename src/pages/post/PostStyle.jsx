import styled from "styled-components";

export const Body = styled.div`
  font-family: "GongGothicMedium";
  height: 100vh;
  background: var(--whiteColor);
  max-width: 720px;
  width: 100%;
  /* padding: 0 20px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Sect1 = styled.div`
  .content-container {
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
      border-radius: 30px;
    }
    .content {
      width: 100%;
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
      width: 350px;
      height: 400px;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      font-size: 14px;
      font-weight: 400;
      p {
        margin-bottom: 16px;
        line-height: 18px;
      }
    }

    .content-inner2 {
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      font-size: 14px;
      font-weight: 400;
      p {
        margin-bottom: 16px;
        line-height: 18px;
      }
    }

    .like-comment {
      display: flex;
      margin-top: 10px;
      .like-transition {
        transition: fill 0.4s ease;
      }
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
      border-radius: 30px;
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
      .date {
        color: var(--fontColor);
        font-size: 0.8rem;
      }
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
  position: fixed;
  background: var(--whiteColor);
  bottom: 0;
  width: 720px;
  height: 61px;
  .comment-container {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    max-width: 720px;
    .comment-list {
      width: 100%;
      display: flex;
      gap: 12px;
    }
    .profile-img {
      width: 36px;
      height: 36px;
      border-radius: 30px;
    }
    .comment-title {
      width: 100%;
      padding-bottom: 3px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btnDisabled {
        display: block;
        width: 40px;
        font-size: 14px;
        color: #c4c4c4;
      }
      .btnActive {
        display: block;
        width: 40px;
        font-size: 14px;
        color: var(--focusColor);
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
