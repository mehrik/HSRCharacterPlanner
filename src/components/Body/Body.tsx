import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

import { Summary } from "../Summary/Summary";
import { SelectCharacterDialog } from "../SelectCharacterDialog/SelectCharacterDialog";

import { Wrapper, Title, Buttons } from "./BodyStyles";

export const Body = () => {
  const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState(false);

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
      <Grid container spacing={2}>
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
    </Wrapper>
  );
};
