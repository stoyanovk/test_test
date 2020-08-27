import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: "470px",
    height: "470px",
    padding: "100px",
    position: "relative",
  },
  circle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2a3d79",
    borderRadius: "50%",
    padding: "30px 35px 50px",
    position: "relative",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "140px",
  },
  text: {
    fontSize: "16px",
    textTransform: "uppercase",
    color: "#fff",
    "&:last-of-type": {
      marginTop: "10px",
      alignSelf: "flex-end",
    },
  },
  price: {
    marginTop: "10px",
    color: "#fff",
    fontSize: "64px",
    alignSelf: "flex-start",
  },
  bigCirclePosition: {
    "&:nth-of-type(1)": {
      position: "absolute",
      top: "calc(50% - 170px)",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
    "&:nth-of-type(2)": {
      position: "absolute",
      top: "calc(50% - 80px)",
      left: "calc(50% + 155px)",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
    "&:nth-of-type(3)": {
      position: "absolute",
      bottom: "calc(50% - 190px)",
      left: "calc(50% + 150px)",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
    "&:nth-of-type(4)": {
      position: "absolute",
      bottom: "calc(50% - 270px)",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
    "&:nth-of-type(5)": {
      position: "absolute",
      bottom: "calc(50% - 190px)",
      left: "calc(50% - 150px)",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
    "&:nth-of-type(6)": {
      position: "absolute",
      top: "calc(50% - 80px)",
      left: "calc(50% - 155px)",
      transform: "translate(-50%, -50%)",
      zIndex: "10",
    },
  },
});

export default useStyles;
