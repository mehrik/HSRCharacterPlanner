import React from "react";
import {
  Dialog as MUIDialog,
  DialogContent as MUIDialogContent,
  DialogTitle as MUIDialogTitle,
  Rating as MUIRating,
} from "@mui/material";

import { useCharacter } from "../../providers/CharacterProvider";
import { useApp } from "../../providers/AppProvider";

import { CharacterAvatar } from "../CharacterAvatar/CharacterAvatar";
import { Icon } from "../Icon/Icon";

import {
  TitleWrapper,
  AvatarWrapper,
  CharacterInformationWrapper,
  CharacterName,
  CharacterAndRarityWrapper,
  CharacterAndPathWrapper,
} from "./CharacterFormDialogStyles";

export const CharacterFormDialog = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { character } = useCharacter();
  const { paths, elements } = useApp();

  if (!character) {
    return null;
  }

  return (
    <MUIDialog open={isOpen} onClose={handleClose}>
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
              />
              <Icon
                url={elements[character.element].icon}
                name={elements[character.element].name}
              />
            </CharacterAndPathWrapper>
          </CharacterInformationWrapper>
        </TitleWrapper>
      </MUIDialogTitle>
      <MUIDialogContent>
        <div>
          <h3>Level</h3>
          Current
        </div>
        <div>
          <h3>Traces</h3>
        </div>
      </MUIDialogContent>
    </MUIDialog>
  );
};
