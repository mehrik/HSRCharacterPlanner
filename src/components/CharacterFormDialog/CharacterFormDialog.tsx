import React from "react";
import {
  Dialog as MUIDialog,
  DialogContent as MUIDialogContent,
  DialogTitle as MUIDialogTitle,
  Rating as MUIRating,
} from "@mui/material";

import { Skill } from "../../types";
import { useCharacter } from "../../providers/CharacterProvider";
import { useApp } from "../../providers/AppProvider";

import { CharacterAvatar } from "../CharacterAvatar/CharacterAvatar";
import { Icon } from "../Icon/Icon";

import { CharacterFormDialogRangeField } from "./CharacterFormDialogRangeField";

import {
  TitleWrapper,
  AvatarWrapper,
  CharacterInformationWrapper,
  CharacterName,
  CharacterAndRarityWrapper,
  CharacterAndPathWrapper,
  SectionLabelLevel,
  SectionLabelTraces,
} from "./CharacterFormDialogStyles";

export const CharacterFormDialog = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { character } = useCharacter();
  const { paths, elements, characterSkills } = useApp();

  if (!character) {
    return null;
  }

  const currentSkills = character.skills
    .map((skillId) => characterSkills[skillId])
    .reduce((acc, skill) => {
      acc[skill.type] = skill;
      return acc;
    }, {} as Record<string, Skill>);

  const basicAttack = currentSkills["Normal"];
  const skill = currentSkills["BPSkill"];
  const ultimate = currentSkills["Ultra"];
  const talent = currentSkills["Talent"];

  console.log("CharacterFormDialog", {
    character,
    characterSkills,
    currentSkills,
  });

  return (
    <MUIDialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <MUIDialogTitle>
        <TitleWrapper>
          <AvatarWrapper>
            <CharacterAvatar
              url={character.icon}
              name={character.name}
              size="md"
            />
          </AvatarWrapper>
          <CharacterInformationWrapper>
            <CharacterAndRarityWrapper>
              <CharacterName>{character.name}</CharacterName>
              <MUIRating readOnly defaultValue={character.rarity} />
            </CharacterAndRarityWrapper>
            <CharacterAndPathWrapper>
              <Icon
                url={paths[character.path].icon}
                name={paths[character.path].name}
                size="48px"
              />
              <Icon
                url={elements[character.element].icon}
                name={elements[character.element].name}
                size="48px"
              />
            </CharacterAndPathWrapper>
          </CharacterInformationWrapper>
        </TitleWrapper>
      </MUIDialogTitle>
      <MUIDialogContent>
        <div>
          <div>
            <SectionLabelLevel>Level</SectionLabelLevel>
          </div>
          <CharacterFormDialogRangeField start={1} end={80} />
          <div>
            <SectionLabelTraces>Traces</SectionLabelTraces>
          </div>
          <CharacterFormDialogRangeField
            icon={basicAttack.icon}
            type={basicAttack.type_text}
            name={basicAttack.name}
            start={1}
            end={6}
          />
          <CharacterFormDialogRangeField
            icon={skill.icon}
            type={skill.type_text}
            name={skill.name}
            start={1}
            end={10}
          />
          <CharacterFormDialogRangeField
            icon={ultimate.icon}
            type={ultimate.type_text}
            name={ultimate.name}
            start={1}
            end={10}
          />
          <CharacterFormDialogRangeField
            icon={talent.icon}
            type={talent.type_text}
            name={talent.name}
            start={1}
            end={10}
          />
        </div>
      </MUIDialogContent>
    </MUIDialog>
  );
};
