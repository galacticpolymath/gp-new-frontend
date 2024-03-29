import {
  container,
  title,
  main,
  mainRaised,
  whiteColor,
  mrAuto,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const aboutUsStyle = {
  main,
  mainRaised,
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor,
    },
    mrAuto,
    mlAuto,
  },
  textCenter: {
    textAlign: "center",
  },

  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  bgColor: {
    backgroundColor: "#2c83c3",
  },
  missionContainer: {
    display: "flexContainer",
  },


  "@media only screen and (max-width: 992px)": {
    /* phones */
    hideLogo: {
      display: "none",
      maxWidth: "100%",
    },
  },
};

export default aboutUsStyle;
