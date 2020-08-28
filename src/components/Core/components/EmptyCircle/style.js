import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#f3c111",
    position: "absolute",
    zIndex: "5",
    transform: "translate(-50%, -50%)",
    "&:nth-child(1)": {
      top: "calc(50% - 120px)",
      left: "calc(50% - 115px)",
      width: "10px",
      height: "10px",
    },
    "&:nth-child(2)": {
      top: "calc(50% - 80px)",
      left: "calc(50% - 150px)",
      width: "20px",
      height: "20px",
    },
    "&:nth-child(3)": {
      top: "calc(50% - 20px)",
      left: "calc(50% - 170px)",
      width: "32px",
      height: "32px",
    },
    "&:nth-child(4)": {
      top: "calc(50% + 60px)",
      left: "calc(50% - 170px)",
      width: "44px",
      height: "44px",
    },
    "&:nth-child(5)": {
      top: "calc(50% + 140px)",
      left: "calc(50% - 125px)",
      width: "56px",
      height: "56px",
    },
    "&:nth-child(6)": {
      top: "calc(50% + 180px)",
      left: "50%",
      width: "62px",
      height: "62px",
    },
    "&:nth-child(7)": {
      top: "calc(50% + 130px)",
      left: "calc(50% + 140px)",
      width: "72px",
      height: "72px",
    },
    "&:nth-child(8)": {
      top: "50%",
      left: "calc(50% + 190px)",
      width: "80px",
      height: "80px",
    },
    "&:nth-child(9)": {
      top: "calc(50% - 130px)",
      left: "calc(50% + 150px)",
      width: "94px",
      height: "94px",
    },
  },
});

export default useStyles;
