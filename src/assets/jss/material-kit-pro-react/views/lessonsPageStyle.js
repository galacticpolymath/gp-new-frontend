import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";

const lessonsPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
  },
  textCenter: {
    textAlign: "center"
  },
  title: {
    ...title,
    color: whiteColor
  },
  mlAuto,
  main: {
    ...main,
    ...mainRaised
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
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  bgColor: {
    backgroundColor: "#6812D1"
  },
  addMargin:{
    margin: "10rem",
  },


  "@media only screen and (max-width: 600px)": {
    /* iphones (material UI "sm" break) */
    hideLogo: {
      display: "none",
      maxWidth: "100%"
    },
    longTitle: {
      fontSize: "2.5rem"
    },
  },

  "@media only screen and (max-width: 960px)": {
    /* tablets (material UI "med" break) */

    hideLogo: {
      display: "none",
      maxWidth: "100%"
    }
  },
  infoArea: {
    padding: "2rem 0 0 0"
  }
};

export default lessonsPageStyle;
