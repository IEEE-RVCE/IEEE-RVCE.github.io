import React, {useState,useEffect} from 'react';
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
    const [match, setMatch] = useState(true);

    useEffect(() => {
      const nomatchElement = document.getElementById("nomatch");
      if (nomatchElement) {
        nomatchElement.style.display = match ? "none" : "block";
        if (!match) {
          setTimeout(() => {
            nomatchElement.style.display = "none";
            setMatch(true);
          }, 1500);
        }
      }
    }, [match]);
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
            setMatch(false);
            console.log("no match");
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
          {!match && <p id = "nomatch">Strings do not match.</p>}
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