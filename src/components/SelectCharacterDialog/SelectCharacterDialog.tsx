import React, { useEffect, useState } from "react";
import {
  Box,
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
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        <Box sx={{ width: "100%" }}>
          <TextField variant="outlined" label="Search" fullWidth />
        </Box>
      </DialogTitle>
      <DialogContent>
        {characters.length && (
          <TilesWrapper>
            <Box
              sx={{
                width: "100%",
                paddingBottom: "24px",
                paddingTop: "24px",
              }}
            >
              <Grid container spacing={4}>
                {characters.map((character) => (
                  <Grid item xs={3} key={character.id}>
                    <SelectCharacterDialogTile character={character} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TilesWrapper>
        )}
      </DialogContent>
    </Dialog>
  );
};
