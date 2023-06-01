import React from 'react';
import { Grid, Dialog, DialogContent, TextField } from '@mui/material';

export const SelectCharacterDialog = ({ isOpen = false, handleClose} : { isOpen: boolean; handleClose: () => void }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Search"/>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}