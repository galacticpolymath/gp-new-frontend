import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const blogPostsPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  title: {
    ...title,
    color: whiteColor,
  },
  mlAuto,
  main: {
    ...main,
    ...mainRaised,
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
    backgroundColor: "#6812D1",
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
  card: {
    "border-radius": "4px",
    color: "#3c4858",
    padding: "0.5rem 1rem",
    marginBottom: "2rem"
  },
  purpleText: {
    color: "#6812D1",
    "&:hover, &:active": {
      color: "#9F4BFF",
    },
  },
};

export default blogPostsPageStyle;
