import React from "react";
import { Button, ImageListItem, ImageListItemBar } from "@mui/material";

import { Character } from "../../utils/character-util";

import { CharacterImage } from "./SelectCharacterDialogTileStyles";

export const SelectCharacterDialogTile = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <Button>
      <ImageListItem key={character.preview}>
        <CharacterImage
          src={`/resources/${character.icon}`}
          alt={character.name}
          className={"MuiImageListItem-img"} // mui applies a class name to native img, but not to styled-components
        />
        <ImageListItemBar
          title={character.name}
          position="below"
          sx={{ color: "#FFFFFF" }}
        />
      </ImageListItem>
    </Button>
  );
};
