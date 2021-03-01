import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  // title
} from "assets/jss/material-kit-pro-react.js";

const featureDetailsStyle = {
  featureDeets:{
    margin: 0,
    paddingBottom:"4rem",
  },
  keyPhrase1:{
    color: primaryColor[0],
    fontWeight: 700,
    fontSize: "1.2em",
  },
  keyPhrase2:{
    color: primaryColor[0],
    fontWeight: 400,
  },
  description:{
  color: "black",
    "& a sup":{
        lineHeight: 0,
        fontSize: "0.7em",
    },
    "& i":{
    fontWeight: "200"
    },
    "& ul":{
    paddingTop: "1.1rem"
    }

  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor[0]
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: infoColor[0]
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: grayColor[0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  // descriptionWrapper: {
  //   color: grayColor[3],
  //   overflow: "hidden"
  // },
  // title: {
  //   ...title,
  //   margin: "1.75rem 0 0.875rem !important",
  //   minHeight: "unset"
  // },
  // description: {
  //   color: grayColor[3],
  //   overflow: "hidden",
  //   marginTop: "0px",
  //   "& p": {
  //     color: grayColor[0],
  //     fontSize: "14px"
  //   }
  // },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  },

  toTop: {
    paddingLeft: "1.1rem",
    paddingTop: "1rem"
  }
};

export default featureDetailsStyle;
