import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tile = styled.div<{ bgImg: string }>`
  background: url(${({ bgImg }) => bgImg});
  background-position: center;
  border-radius: 12px;
  background-size: cover;
  height: 160px;
  width: 135.5px;
  margin-bottom: 12px;
  outline: 2px solid #ffffff;
`;

export const CharacterName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;
