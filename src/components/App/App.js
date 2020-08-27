import React from "react";
import Core from "../Core/Core";
import useStyles from "./style";
import "./global.css";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Core />
    </div>
  );
}

export default App;
