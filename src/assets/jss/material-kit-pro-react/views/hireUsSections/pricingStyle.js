import {
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  warningColor,
  hexToRgb,  blackColor
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
    textAlign: "center"
  },
  pricingSection: {
    padding: "80px 0px"
  },
  textInfo: {
    color: infoColor[0] + " !important",
  },
  leadIn:{
    padding: "1% 10%",

    "& h4": {
      paddingBottom: "1.5rem",
    }
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
};

export default pricingStyle;
