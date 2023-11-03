import styled from "styled-components";

// section 3

export const Sect3 = styled.div`
  height: 100%;
  margin-bottom: 60px;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background: #fff;
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .content-container {
    /* width: 100%; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 16px 16px 0;
    .content-list {
      display: flex;
      gap: 12px;
      margin-top: 12px;
      .content-id {
        display: flex;
        gap: 12px;
      }
    }
    .profile-img {
      width: 42px;
      height: 42px;
      border-radius: 30px;
    }
    .content-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .imgBox {
        img {
        }
      }
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
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .content-inner {
      img {
        width: 304px;
        height: 228px;
      }
      font-size: 14px;
      font-weight: 400;
      p {
        margin-bottom: 20px;
      }
    }
    .like-comment {
      display: flex;
      button {
        display: flex;
        align-items: center;
        span {
          margin-left: 4px;
          margin-right: 4px;
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

    .gap {
      width: 304px;
      height: 228px;
    }
  }
`;
