import React from "react";
import { func } from "prop-types";
import useStyles from "./style";

export default function Button({ onClick }) {
  const classes = useStyles();
  return (
    <button type="button" className={classes.box} onClick={onClick}>
      <span className={classes.cross}>
        <span className={classes.crossItem} />
        <span className={classes.crossItem} />
      </span>

      <span className={classes.text}>Add Service</span>
    </button>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
};
