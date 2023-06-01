import React from "react";
import { Grid, Dialog, DialogContent, TextField } from "@mui/material";

import { CharacterUtil } from "../../utils/character-util";

import { SelectCharacterDialogTile } from "./SelectCharacterDialogTile";

export const SelectCharacterDialog = ({
  isOpen = false,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const characters = CharacterUtil.getAllCharacters();

  console.log("characters", characters);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Search" />
          </Grid>
          {characters.map((character) => (
            <Grid item xs={3} key={character.id}>
              <SelectCharacterDialogTile character={character} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
