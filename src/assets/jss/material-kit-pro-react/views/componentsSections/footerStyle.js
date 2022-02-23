import {
  title,
  description,
  btnLink,
  twitterColor,
  dribbbleColor,
  instagramColor,
  grayColor, roseColor, blackColor
} from "assets/jss/material-kit-pro-react.js";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

const style = {
  ...imagesStyles,
  container:{
    padding: 0,
  },
  title,
  description,

  footerContainer:{
    background: "linear-gradient(180deg,rgba(1,1,1,0.3) 0%,transparent 3%)," +
      "linear-gradient(-5deg, rgba( 183, 152, 232,1) 10%, rgba( 183, 152, 232,0) 25%),"+
      "linear-gradient(10deg, rgba(44,131,195,1) 1%, rgba(44,131,195,0) 30%)",
    borderTop: "1px solid"+grayColor[0],
    paddingTop: "3rem",
    display: "grid",
    justifyContent: "center",

    "& *": {

    },
    h5: {
      fontWeight: 500,
    },

    "@media only screen and (max-width: 800px)": {
      background: "linear-gradient(180deg,rgba(1,1,1,0.3) 0%,transparent 3%)," +
        "linear-gradient(-5deg, rgba( 183, 152, 232,1) 0.5%, rgba( 183, 152, 232,0) 9%)," +
        "linear-gradient(8deg, rgba(44,131,195,1) 1%, rgba(44,131,195,0) 11%)"
    }
  },

  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
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
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
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

  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      padding: 0,
      listStyle: "none",
      "& li": {
        display: "inline-block"
      },
      "& a": {
        display: "block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  linksVertical: {
    "& li": {
      display: "block !important",
      marginLeft: "-5px",
      marginRight: "-5px",
      "& a": {
        padding: "5px !important",
        borderBottom: "none"
      }
    }
  },
  footer: {
    "& ul li": {
      display: "inline-block",
      "& a:hover":{
        transform:"scale(1.1,1.1)",
        transition: "0.2s"
      }
    },
    "& h4, & h5": {
      color: blackColor,
      textDecoration: "none",
      fontWeight: 500,
      lineHeight: 1

    },
    "& ul:not($socialButtons) li a": {
      borderBottom: "none",
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      // textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    "& small": {
      fontSize: "75%",
      color: grayColor[10]
    },
    "& $pullCenter": {
      display: "inline-block",
      float: "none"
    }
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  copyRight: {
    padding: "15px 0px"
  },
  socialButtons: {
    "& li": {
      display: "inline-block"
    }
  },
  btnTwitter: {
    ...btnLink,
    color: twitterColor
  },
  btnDribbble: {
    ...btnLink,
    color: dribbbleColor
  },
  btnInstagram: {
    ...btnLink,
    color: instagramColor
  },
  bracket:{
    fontSize: "1.5em",
    fontWeight: "100",
    verticalAlign: "center"
  },
  followUs:{

    placeContent: "center",
    "& p":{
      display:"block",
      flexWrap: "nowrap",
      paddingLeft: "0.25rem",
      marginBottom: "-0.5rem"
    }
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative",
  },
  verticallyCentered:{
    display: "flex"
  },
  subscribeButton : {
    color: "white !important",
    position: "relative",
    overflow: "hidden",
    maxWidth: "100%",
    "&:hover": {
      content: '',
      position: "absolute",
      backgroundColor: "rgba(203,31,142,0.3)",
      fontWeight: 600,
      fontSize: "1.1em",
      border: "3px solid " + roseColor[0],
      color: roseColor[0] + " !important",
      transform: "scale(1,1)",
      transition: "0.2s",
      maxWidth: "100%"
    } ,
    "&:hover svg": {
      transform: "scale3d(1.5,1.5,1)",
      fontSize: "3rem"
    }
  },
  mailIcon:{
    margin: "auto 0.75rem auto auto !important",
    // transform: "scale(2,2)"
    // "&:hover":{
    //   transform:"scale3d(2.1,2.1,1)",
    //   transition:"0.2s",
    //   // fontSize: "2em"
    // }
  },

  customFormControl: {
      paddingTop: "14px"
  }
};

export default style;
