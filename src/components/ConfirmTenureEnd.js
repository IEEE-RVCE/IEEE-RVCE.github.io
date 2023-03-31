import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core';

export const ConfirmEndTenureDialog = props => {

    const endTenure = async e => {
        e.preventDefault();
        const inputField = document.getElementById('confirmationText');
        const inputValue = inputField.value;
        const expectedValue = 'my life my choice'; 
    
        if (inputValue === expectedValue) {
            console.log("match");
            await props.onEndTenureStateChange(true);
            props.onClose();
        }
        else{
            console.log("no match");
            props.onClose();
        }
    };
  return (
    <>
      <Dialog onClose={props.onClose} open={props.open}>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
          This action cannot be undone. This will permanently end tenure of current execoms.
          <br/>
          Please type <i>my life my choice</i> to confirm.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="confirmationText"
            label=""
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
            <Button variant="contained" style={{backgroundColor: "red", color:"white"}} onClick={endTenure} >
              End Tenure
            </Button>
            <Button variant="contained" onClick={props.onClose} style={{backgroundColor: "blue", color:"white"}}>
              Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}