import styled from "styled-components";

export const Sect2 = styled.div`
  width: 720px;
  height: 208px;
  margin-bottom: 12px;
  h2 {
    margin-top: 20px;
    margin-left: 18px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Sale = styled.div`
  display: flex;
  margin-left: 18px;
  gap: 10px;
  overflow: auto;
  img {
    width: 140px;
    height: 90px;
  }
  p {
    width: 136px;
    height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 6px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  span {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 700;
    color: #cb9367;
  }
`;
