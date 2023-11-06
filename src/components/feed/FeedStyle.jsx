import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Sect1 = styled.div`
  .content-container {
    margin-bottom: 60px;
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
        width: 304px;
        text-overflow: ellipsis;
        overflow: hidden;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;

        margin-bottom: 16px;
        line-height: 18px;
      }
      img {
        width: 304px;
        height: 228px;
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
    .inview {opacity: 0;}
  }
`;
