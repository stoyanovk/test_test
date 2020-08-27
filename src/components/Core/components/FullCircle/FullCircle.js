import React from "react";
import { string } from "prop-types";
import useStyles from "./style";

export default function FullCircle({ icon, title }) {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <img src={icon} alt={title} className={classes.img} />
      <span className={classes.text}>{title}</span>
    </div>
  );
}

FullCircle.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
};
