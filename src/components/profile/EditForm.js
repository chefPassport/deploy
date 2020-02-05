import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

export default function ModalForm(prop) {
  const classes = useStyles();

  return (
    <form className={classes.root} Validate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Recipe Name"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          variant="outlined"
        />
      </div>
      <Button
      variant="contained"
      type="button"
      onClick={prop.handleClose}
      color="secondary"
    >
      Edit Recipe
    </Button>
    </form>
  );
}