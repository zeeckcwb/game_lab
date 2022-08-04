import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loginContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/background.png)",
  },
  loginInputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

export {useStyles}