import {
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  warningColor,
  hexToRgb,  blackColor,

  primaryColor,
} from "assets/jss/material-kit-pro-react.js";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.6)!important",
      paddingBottom: "2rem",
    }
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left !important",
  },
  pricingSection: {
    padding: "80px 0px",
    overflowY: "scroll",
    scrollBehavior: "smooth",
  },

  textInfo: {
    color: infoColor[0] + " !important",
  },

  //new class style that makes an elevated, small $ before the number
  dollar:{
    "&:before":{
      content: '"$"',
      fontSize: "1rem",
      verticalAlign: "top",
      lineHeight: "2",
      paddingRight: ".2rem",
    }

  },
  whiteButtonCust: {
    "&:hover": {
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.2)",
      color: warningColor[0],
    },
  },
  valueProps:{
    paddingTop:"10rem",
    "& h2":{
      textAlign: "center",
    },
  },
  valuePropsGridContainer:{

  },
  appeal:{
    padding: "5rem 10% 0 10%",

  },
  boxContainer: {
    backgroundColor:primaryColor[5],
    padding: "20px 20px 20px 40px",
    border: "3px solid" + primaryColor[7],
    "& h2": {
      // ...description,

      // fontWeight: "600",
      color: primaryColor[0],
    },
  },

  custInfoArea:{
    padding:"0",
    // margin: "2rem 5rem",
    maxWidth: "45%",
  },
  // keep infoAreas wider on smaller devices
  "@media only screen and (max-width: 1000px)":{
    custInfoArea:{
      padding:"0",
      // margin: "2rem 5rem",
      maxWidth: "80%",
    },
  }

};

export default pricingStyle;