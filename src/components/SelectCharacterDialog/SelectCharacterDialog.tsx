import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
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
  const [filteredCharacters, setFilteredCharacters] = useState(
    [] as Character[]
  );

  useEffect(() => {
    fetch("./resources/index_new/en/characters.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(CharacterUtil.getAllCharacters(data));
        setFilteredCharacters(CharacterUtil.getAllCharacters(data));
      });
  }, []);

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
