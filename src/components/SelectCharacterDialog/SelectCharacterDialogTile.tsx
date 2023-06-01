import React from "react";

import { Character } from "../../utils/character-util";

import { Tile, CharacterName } from "./SelectCharacterDialogTileStyles";

export const SelectCharacterDialogTile = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <div>
      <Tile bgImg={`/resources/${character.preview}`} />
      <CharacterName>{character.name}</CharacterName>
    </div>
  );
};
