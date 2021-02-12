import { colors, font } from "../components/constants/colors";

export const styles = {
  dot: {
    fontSize: "1rem",
    fontWeight: "bolder"
  },
  register: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: colors.dark_background_color
  },
  register__container: {
    width: "450px",
    borderRadius: 10,
    justifyContent: "center",
    background: "#36393f",
    boxShadow: `0 2px 10px 0 rgba(0,0,0,.2)`
  },
  inputField: {
    fontSize: ".95rem",
    fontFamily: font.fontFamily,
    color: "white !important",
    margin: ".3rem 0",
    border: `1px solid ${colors.borderColor} !important`
  },
  form: {
    width: "90%",
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginTop: ".4rem",
    color: `${colors.textColor} !important`,
    fontSize: ".9rem",
    textTransform: "capitalize"
  },
  button: {
    margin: "1rem 0",
    color: colors.white,
    fontWeight: "bold",
    background: `${colors.lightBlue} !important`,
    textTransform: "capitalize"
  },
  link: {
    fontSize: "80%",
    color: colors.lightBlue,
    textDecoration: "none"
  },
  link_2: {
    fontSize: "80%",
    color: colors.lightBlue
  },
  policy: {
    marginTop: "1rem",
    color: colors.darkGrayColor
  },
  formHeader: {
    display: "flex",
    paddingTop: "15%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: colors.white,
    fontFamily: font.fontFamily
  },
  subtitle: {
    width: "70%",
    textAlign: "center",
    color: colors.darkGrayColor
  },
  underlines: {
    color: colors.lightBlue
  },

  usernumber: {
    color: colors.lightBlue,
    fontWeight: "bold"
  }
};
