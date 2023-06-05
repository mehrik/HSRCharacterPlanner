import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #484848;
  padding-bottom: 24px;
`;

export const AvatarWrapper = styled.div`
  margin-right: 27px;
`;

export const CharacterInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CharacterName = styled.span`
  font-size: 32px;
  margin-right: 14px;
  line-height: 35px;
`;

export const CharacterAndRarityWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const PathAndElementWrapper = styled.div`
  display: flex;
  div:first-child {
    margin-right: 12px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
`;

const SectionLabel = styled.div`
  display: inline-block;
  padding: 8px 12px;
  background: #9d3db3;
  border-radius: 8px;
`;

export const SectionLabelLevel = styled(SectionLabel)`
  margin-bottom: 8px;
`;

export const SectionLabelTraces = styled(SectionLabel)`
  margin-bottom: 16px;
`;
