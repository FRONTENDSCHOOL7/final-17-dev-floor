import styled from "styled-components";

export const Body = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
`;

export const Follower = styled.div`
  display: flex;
  margin: 20px 16px;
  img {
    width: 50px;
    height: 60px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
      font-size: 14px;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      color: var(--767676, #767676);
    }
    button {
      width: 56px;
      padding: 7px 11px;
      background: #12184e;
    }
  }
`;
