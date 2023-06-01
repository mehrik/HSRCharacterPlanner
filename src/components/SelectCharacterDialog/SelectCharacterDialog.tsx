import React, { useEffect, useState } from "react";
import {
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { CharacterUtil, Character } from "../../utils/character-util";

import { SelectCharacterDialogTile } from "./SelectCharacterDialogTile";
import { TilesWrapper } from "./SelectCharacterDialogStyles";

export const SelectCharacterDialog = ({
  isOpen = false,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const [characters, setCharacters] = useState([] as Character[]);

  useEffect(() => {
    fetch("./resources/index_new/en/characters.json")
      .then((res) => res.json())
      .then((data) => setCharacters(CharacterUtil.getAllCharacters(data)));
  }, []);

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={"sm"}>
      <DialogTitle>
        <Grid container>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Search" />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        {characters.length && (
          <TilesWrapper>
            <Grid container spacing={2}>
              {characters.map((character) => (
                <Grid item xs={3} key={character.id}>
                  <SelectCharacterDialogTile character={character} />
                </Grid>
              ))}
            </Grid>
          </TilesWrapper>
        )}
      </DialogContent>
    </Dialog>
  );
};
