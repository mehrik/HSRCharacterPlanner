import React from "react";

import { Character } from "../../utils/character-util";

import {
  Wrapper,
  Tile,
  CharacterName,
} from "./SelectCharacterDialogTileStyles";

export const SelectCharacterDialogTile = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <Wrapper>
      <Tile bgImg={`/resources/${character.icon}`} />
      <CharacterName>{character.name}</CharacterName>
    </Wrapper>
  );
};
