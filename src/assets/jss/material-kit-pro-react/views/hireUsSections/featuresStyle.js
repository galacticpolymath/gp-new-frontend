import {
  title,
  cardTitle,
  mlAuto,
  mrAuto,
  whiteColor,
  hexToRgb,
  warningColor, blackColor
} from "assets/jss/material-kit-pro-react.js";

const featuresStyle = {

  featuresSection: {
    padding: "2rem 10% 0",
    // overflowY: "scroll",
    scrollBehavior: "smooth",
  },

  textCenter: {
    textAlign: "center"
  },
  title,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.6)!important",
      paddingBottom: "2rem",
    }
  },
  mlAuto,
  mrAuto,
  //new class style that makes an elevated, small $ before the number
  dollar: {
    "&:before": {
      content: '"$"',
      fontSize: "1rem",
      verticalAlign: "top",
      lineHeight: "2",
      paddingRight: ".2rem",
    },
  },
    premiumAddOn:{
      "& small":{
        color: "white",
      },

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

export default featuresStyle;
