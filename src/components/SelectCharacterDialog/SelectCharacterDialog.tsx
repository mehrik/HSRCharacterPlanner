import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  ImageList,
} from "@mui/material";

import { useApp } from "../../providers/AppProvider";
import { Character } from "../../utils/character-util";

import { SelectCharacterDialogTile } from "./SelectCharacterDialogTile";
import { TilesWrapper } from "./SelectCharacterDialogStyles";

export const SelectCharacterDialog = ({
  isOpen = false,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { charactersList } = useApp();
  const [filteredCharacters, setFilteredCharacters] = useState(charactersList);

  useEffect(() => {
    setFilteredCharacters(charactersList);
  }, charactersList);

  const handleSearch = debounce((value) => {
    if (!value) {
      setFilteredCharacters(charactersList);
    } else {
      setFilteredCharacters(
        charactersList.filter((c: Character) =>
          c.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }, 500);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        <Box sx={{ width: "100%" }}>
          <TextField
            variant="outlined"
            label="Search"
            fullWidth
            onChange={(event) => handleSearch(event.target.value)}
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        {filteredCharacters.length ? (
          <TilesWrapper>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <ImageList cols={4}>
                {filteredCharacters.map((character: Character) => (
                  <SelectCharacterDialogTile
                    character={character}
                    key={character.id}
                  />
                ))}
              </ImageList>
            </Box>
          </TilesWrapper>
        ) : (
          <Box sx={{ width: "100%" }}>
            Oops, no one came up. Try searching again.
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
