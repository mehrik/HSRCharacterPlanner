import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 64px 53px 53px;
  height: calc(100% - 184px); // 67px + (53px * 2) === Header + padding
`;

export const Title = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: flex-start;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;