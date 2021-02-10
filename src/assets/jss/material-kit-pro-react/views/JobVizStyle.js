// ported from contactUsStyle.js
import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  mrAuto,
  description,
  whiteColor,
} from "assets/jss/material-kit-pro-react.js";

const JobVizStyle = {
  main,
  mainRaised,
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor,
    },
  },
  mlAuto,
  mrAuto,
  description,
  container: {
    ...container,
    // maxWidth: "970px !important",
    zIndex: "2",
    position: "relative",
  },
   bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block",
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0,
  },
  textCenter: {
    textAlign: "center !important",
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
    backgroundColor: "#CB1F8E",
  },
  "@media (max-width: 991px)": {
    hideLogo: {
      display: "none",
    },
  },

  "@media only screen and (max-width: 992px)": {
    /* phones */
    hideLogo: {
      display: "none",
      maxWidth: "100%",
    },
  },
};

export default JobVizStyle;