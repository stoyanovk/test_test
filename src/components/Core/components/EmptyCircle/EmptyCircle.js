import React from "react";
import useStyles from "./style";

export default function EmptyCircle() {
  const classes = useStyles();
  return <div className={classes.circle} />;
}
