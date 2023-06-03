import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";

import { Summary } from "../Summary/Summary";
import { SelectCharacterDialog } from "../SelectCharacterDialog/SelectCharacterDialog";
import { CharacterFormDialog } from "../CharacterFormDialog/CharacterFormDialog";

import { useCharacter } from "../../providers/CharacterProvider";

import { Wrapper, Title, Buttons } from "./BodyStyles";

export const Body = () => {
  const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState(false);
  const [isCharacterFormDialogOpen, setIsCharacterFormDialogOpen] =
    useState(false);
  const { character, setCharacter } = useCharacter();

  useEffect(() => {
    if (character) {
      setIsCharacterDialogOpen(false);
      setIsCharacterFormDialogOpen(true);
    } else {
      setIsCharacterFormDialogOpen(false);
    }
  }, [character]);

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Title>
            <h1>Pom Pom Planner</h1>
          </Title>
        </Grid>
        <Grid item xs={3}>
          <Buttons>
            <Button
              variant="contained"
              onClick={() => setIsCharacterDialogOpen(true)}
            >
              Add Character
            </Button>
            <Button variant="contained">Add Light Cone</Button>
          </Buttons>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className="SUMMARY_AND_PLANNER"
        sx={{ height: "calc(100% - 100px)" }} // TODO: Fix this
      >
        <Grid item xs={3}>
          <Summary />
        </Grid>
        <Grid item xs={9}>
          Character Planner goes here
        </Grid>
      </Grid>
      <SelectCharacterDialog
        isOpen={isCharacterDialogOpen}
        handleClose={() => setIsCharacterDialogOpen(false)}
      />
      <CharacterFormDialog
        isOpen={isCharacterFormDialogOpen}
        handleClose={() => {
          setCharacter(null);
          setIsCharacterFormDialogOpen(false);
        }}
      />
    </Wrapper>
  );
};
