import styled from "styled-components";

export const HomeWrap = styled.div`
  font-family: "GongGothicMedium";
  background: var(--whiteColor);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeFeed = styled.div`
  max-width: 720px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--borderColor);
`;
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  h2 {
    margin: auto 0;
    color: var(--bgColor);
    font-weight: 500;
    font-size: 1.2rem;
  }
  .search button img {
    vertical-align: top;
  }
`;
export const HomeSearch = styled.div`
  margin: auto;
  .inner {
    width: 100%;
    margin: 0 auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .logoSymbol {
    margin: auto;
    width: 100px;
    height: 95px;
  }
  .searchBtn {
    margin: auto;
    border-radius: 20px;
    width: 120px;
    height: 44px;
    background: var(--bgColor);
    text-align: center;
    line-height: 44px;
    button {
      width: 100%;
      height: 100%;
      color: var(--whiteColor);
    }
  }
`;
