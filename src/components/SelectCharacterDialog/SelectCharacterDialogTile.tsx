import React from "react";
import { Avatar } from "@mui/material";

import { Character } from "../../utils/character-util";

export const SelectCharacterDialogTile = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <div>
      <Avatar alt={character.name} src={character.preview} />
    </div>
  );
};
