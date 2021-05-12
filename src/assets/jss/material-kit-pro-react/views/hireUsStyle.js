import {
  container,
  title,
  main,
  mainRaised,
  grayColor,
  whiteColor,
  primaryColor,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";

const hireUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
    display: "grid",
    placeItems: "center",
    // paddingTop: "4rem"
  },
  title: {
    ...title

  },
  whiteTitle: {
    ...title,
    marginTop: 0,
    "&, & + h4": {
      color: whiteColor
    }
  },
  subtitle: {
    marginTop: "-1.5rem",
    color: grayColor[3]
  },
  textCenter: {
    textAlign: "center"
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
    backgroundColor: "#6C2D82"
  },
  appeal: {
    padding: "5rem 10% 0 10%"

  },
  boxContainer: {
    backgroundColor: grayColor[2],
    padding: "5vh 5vw ",
    margin: "0 2vw",
    border: "1px solid" + grayColor[6],
    borderRadius: "5px",
    "& h3": {
      // ...description,

      fontWeight: "500"
      // color: primaryColor[0],
    }
  },
  interjection:{
    width: "100%",
    position: "relative",
    padding: "4% 15%",
    margin: "10% 0 10%",
    textAlign: "center",
    justifyContent: "center",
    display: "block",
    backgroundColor: primaryColor[5],
    "& h2,h3":{
      marginTop: 0,
      marginBottom: "1rem",
      // margin: "1.5rem 0",
      textShadow: "2px 2px 3px rgba(0,0,0,.3)"
    },
    // Custom spacing on the last element of the A la carte banner
    "& h4:last-of-type":{
      marginBottom: "1rem"
    }
  },

  "@media only screen and (max-width: 1280px)": {
    whiteTitle: {

      "&.hireUsTitle": {
        fontSize: "3rem"
      }
    }

  },
  "@media only screen and (max-width: 1000px)": {
    whiteTitle: {
      "&.hireUsTitle": {
        fontSize: "2.4rem"
      }
    }

  },

  "@media only screen and (max-width: 960px)": {
    /* tablets */

    hideLogo: {
      display: "none",
      maxWidth: "100%",
    },
      whiteTitle: {
        "&.hireUsTitle": {
          fontSize: "3.2rem"
        }
    }


  },
  "@media only screen and (max-width: 600px)": {
    /* sm phones */

    hideLogo: {
      display: "none",
      maxWidth: "100%"
    },
    whiteTitle: {
      "&.hireUsTitle": {
        fontSize: "2.6rem"

      }
    }
  }
};

export default hireUsStyle;
