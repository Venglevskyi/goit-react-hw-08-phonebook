import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    transition: "background-color 200ms ease-in-out",
    cursor: "pointer"
  }
}));

export default function IconLabelButtons({ removeContact }) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      size="small"
      startIcon={<DeleteIcon />}
      onClick={removeContact}
    >
      Delete
    </Button>
  );
}

IconLabelButtons.propTypes = {
  removeContact: PropTypes.func.isRequired
};
