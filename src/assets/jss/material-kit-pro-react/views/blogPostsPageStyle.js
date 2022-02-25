import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  mlAuto, infoColor, hexToRgb, blackColor
} from "assets/jss/material-kit-pro-react.js";

const blogPostsPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    display: "grid"
  },

  noLeftPad:{
    padding: "0.5rem 0",
    "& h4":{
      fontWeight: 400,
      fontSize: "1.3em",
      marginBottom: "0.25rem",
      lineHeight: "1"
    },
    "& p":{
      lineHeight: "1.15"
    }
  },

  matrix: {
    // display: "grid",
    gridAutoRows: "max-content",
    gridAutoColumns: "auto",
    gridRowGap: "20px"
  },
  link:{
    "text-decoration": "none !important",

    "&:hover": {
      "text-decoration": "blue wavy underline !important",
    }
  },
  lessonCard:{
    borderRadius: "6px",
    color: "#3c4858",
    padding: "0.5rem 1rem",
    height: "100%",
    "&:hover":{
      //Man, I cannot disable this with none...but a white underline seems to work
      textDecoration: "white underline ",
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.2)"
    }
  },
  noUnderline:{
    "&:hover": {
      // "text-decoration": "tran underline !important"
    }
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
  subscribeFooter:{
    paddingTop: "1rem"
  },

  subscribeAppeal:{
    fontWeight: 600,
    color: infoColor[0],

  },

  "@media (max-width: 991px)": {
    hideLogo: {
      display: "none"
    },

    subscribeAppeal: {


    }

  },

  "@media only screen and (max-width: 992px)": {
    /* phones */
    hideLogo: {
      display: "none",
      maxWidth: "100%"
    }
  }
};

export default blogPostsPageStyle;
