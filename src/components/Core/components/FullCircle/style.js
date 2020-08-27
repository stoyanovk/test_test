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
    transition: "transform 0.3s ease-in-out",
  },
  img: {
    width: "40px",
  },
  text: {
    fontSize: "11px",
    color: "#3e3b48",
  },
});

export default useStyles;
