// ported from contactUsStyle.js
import {
  container,
  title,
  main,
  mlAuto,
  mrAuto,
  description,
  whiteColor
} from "assets/jss/material-kit-pro-react.js";

const JobVizStyle = {
  main,
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor
    }
  },
  mlAuto,
  mrAuto,
  description,
  container: {
    ...container,
    zIndex: 1
    // maxWidth: "970px !important",
    // zIndex: "2",
    // position: "relative",
  },

  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"

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
  jobDefHeader:{
    paddingBottom: "1.5rem",

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
  attribution: {
    textAlign: "right",
    paddingLeft: "0",
    paddingTop: "8%"
  },
  bgColor: {
    backgroundColor: "#CB1F8E"
  },
  modalContainer: {},
  tileContainer: {
    display: "grid-container",
    justifyContent: "center",
    rowGap: "4px",
    // columnGap: "4px"
  },
  jobTile: {
    display: "grid",
    minWidth: 0,
    // alignContent: "center",
    // flexDirection: "column",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    background: "aliceblue",
    // margin: "4px",
    padding: "1rem"
    // flex: "1 1 15%",
  },
  "@media only screen and (max-width: 1280px)": {
    title: {

      "&.hireUsTitle": {
        fontSize: "3rem"
      }
    }

  },
  "@media only screen and (max-width: 1000px)": {
    title: {

      "&.hireUsTitle": {
        fontSize: "2.4rem"
      }
    }

  },

  "@media only screen and (max-width: 960px)": {
    /* phones */

    hideLogo: {
      display: "none",
      maxWidth: "100%"
      // "&.hireUsTitle": {
      //   fontSize: "2.6rem",
      // },
    }
  }
};

export default JobVizStyle;
