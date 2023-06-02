import React, { useState } from "react";
import { debounce } from "lodash";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  ImageList,
} from "@mui/material";

import { useCharacters } from "../../providers/CharactersProvider";
import { CharacterUtil } from "../../utils/character-util";

import { SelectCharacterDialogTile } from "./SelectCharacterDialogTile";
import { TilesWrapper } from "./SelectCharacterDialogStyles";

export const SelectCharacterDialog = ({
  isOpen = false,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const charactersMap = useCharacters();
  const characters = CharacterUtil.getCharactersArray(charactersMap);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  const handleSearch = debounce((value) => {
    if (!value) {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(
        characters.filter((c) =>
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
                {filteredCharacters.map((character) => (
                  <SelectCharacterDialogTile character={character} />
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
