import React, { memo } from "react";
import useStyles from "./style";

function EmptyCircle() {
  const classes = useStyles();
  return <div className={classes.circle} />;
}
export default memo(EmptyCircle);
