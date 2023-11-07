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
  }
  .modalBtn {
    margin-left: auto;
  }
  .btn-save {
    border: 1px solid #fff;

    color: #fff;
    background: #12184e;
    padding: 5px 30px;
    border-radius: 32px;

    &.disabled {
      color: #fff;
    }
  }
  .btn-save2 {
    border: 1px solid #fff;
    color: #fff;
    border: 1px solid var(--whiteColor);
    width: 90px;
    height: 32px;
    border-radius: 32px;
    cursor: not-allowed;
  }

  .active {
    border: 1px solid #fff;

    color: #fff;
    background: #12184e;
    width: 90px;
    height: 32px;
    border-radius: 32px;
  }
`;

export const TopFollowers = styled.div`
  max-width: 720px;
  width: 100%;
  background: #12184e;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin-left: 16px;
    margin-right: 15px;
  }
  p {
    color: #fff;
    font-size: 18px;
    transform: translateY(-5%);
  }
`;
