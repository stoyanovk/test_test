import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "#f3c111",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    outline: "none",
    "&:active": {
      transform: "scale(0.8)",
    },
    "&:focus": {
      border: "2px solid #3e3b48",
    },
  },
  cross: {
    position: "relative",
    width: "34px",
    height: "34px",
    marginBottom: "5px",
  },
  crossItem: {
    backgroundColor: "#3e3b48",
    width: "100%",
    height: "2px",
    position: "absolute",
    top: "calc(50% - 1px)",
    left: 0,
    "&:nth-of-type(2)": {
      transform: "rotate(-90deg)",
    },
  },
  text: {
    fontSize: "11px",
    color: "#3e3b48",
  },
});

export default useStyles;
