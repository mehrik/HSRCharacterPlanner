import styled from "styled-components";

export const Tile = styled.div<{ bgImg: string }>`
  background: url(${({ bgImg }) => bgImg});
  background-position: center;
  border-radius: 12px;
  background-size: cover;
  height: 160px;
  width: 135.5px;
  margin-bottom: 12px;
`;

export const CharacterName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;
