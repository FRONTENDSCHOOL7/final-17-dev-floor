import styled from "styled-components";

export const Body = styled.div`
  background: #fff;
  font-family: "GongGothicMedium";
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const Follower = styled.div`
  display: flex;
  margin: 20px 16px;
  img {
    width: 50px;
    height: 60px;
  }
  .id {
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
  }
  .btn-follow {
    color: #fff;
    border-radius: 26px;
    width: 70px;
    height: 35px;
    padding: 7px 9px;
    background: #12184e;
    margin-top: 15px;
    font-size: 14px;
  }
  .btn-cancle {
    color: #767676;
    border-radius: 26px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    width: 75px;
    height: 35px;
    padding: 7px 9px;
    margin-top: 15px;
    font-size: 14px;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-10%);
    margin-left: 12px;
  }
`;
