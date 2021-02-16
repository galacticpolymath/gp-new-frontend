import {
  container,
  title,
  main,
  mainRaised,
  whiteColor,
  mrAuto,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const hireUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    // "&, & + h4": {
      color: whiteColor,
    // },
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
    backgroundColor: "#6C2D82",
  },
  // "@media (max-width: 991px)": {
  //   hideLogo: {
  //     display: "none",
  //   },
  // },
  "@media only screen and (max-width: 1280px)": {
    title: {

      "&.hireUsTitle": {
        fontSize: "3rem",
      },
    },

  },
   "@media only screen and (max-width: 1000px)": {
    title: {

      "&.hireUsTitle": {
        fontSize: "2.4rem",
      },
    },

  },

  "@media only screen and (max-width: 960px)": {
    /* phones */

    hideLogo: {
      display: "none",
      maxWidth: "100%",
      // "&.hireUsTitle": {
      //   fontSize: "2.6rem",
      // },
    },
  },
};

export default hireUsStyle;
