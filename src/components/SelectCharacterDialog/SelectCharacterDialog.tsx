import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  ImageList,
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
              }}
            >
              <ImageList cols={4}>
                {characters.map((character) => (
                  <SelectCharacterDialogTile character={character} />
                ))}
              </ImageList>
            </Box>
          </TilesWrapper>
        )}
      </DialogContent>
    </Dialog>
  );
};
