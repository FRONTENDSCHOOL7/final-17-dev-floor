import styled from "styled-components";

export const Top = styled.div`
  max-width: 720px;
  width: 100%;
  background: var(--bgColor);
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);

  button {
    margin: 9px 16px;
    border-style: none;
  }
  .modalBtn {
    margin-left: auto;
  }
  .btn-save {
    color: #fff;
    background: #12184e;
    padding: 7px 32px;
    border-radius: 32px;

    &.disabled {
      color: #fff;
      background: #6f76b6;
    }
  }
  .btn-save2 {
    color: #fff;
    background: #6f76b6;
    padding: 7px 32px;
    border-radius: 32px;
    cursor: not-allowed;
  }

  .active {
    color: #fff;
    background: #12184e;
    padding: 7px 32px;
    border-radius: 32px;
  }
`;

export const TopFollowers = styled.div`
  max-width: 720px;
  width: 100%;
  background: #fff;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  padding: 0 20px;
  button {
    margin-right: 30px;
  }
  p {
    font-size: 18px;
    transform: translateY(-10%);
  }
`;
