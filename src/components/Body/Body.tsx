import React from 'react';
import { Grid, Button } from "@mui/material";

import { Summary } from '../Summary/Summary';

import { Wrapper, Title, Buttons } from './BodyStyles';

export const Body = () => {
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
            <Button variant="contained">Add Character</Button>
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
    </Wrapper>
  )
}