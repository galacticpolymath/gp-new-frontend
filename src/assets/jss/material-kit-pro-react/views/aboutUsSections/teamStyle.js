import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor
} from "assets/jss/material-kit-pro-react.js";

const teamStyle = {
  mrAuto,
  mlAuto,
  title,
  description: {
    ...description,
    marginBottom: "80px",
  },
  infoBox:{
    margin:"0 auto",
    padding: "1rem",
    justifyContent: "center",
    width: "80%",
    contentFit: "contain",
    background: "linear-gradient(328deg, #e3f4ff 0%, #f5f9fc 100%)",
    maxWidth:"100% !important"
  },

  cardTitle,
  cardDescription: {
    color: grayColor[3],
    marginLeft: "1.2rem"

  },

  team: {
    // padding: "80px 0px",
  },

  sectionLabel:{
    padding: "6vh 2vh 2vh",
    "& >*":{
      textAlign: "center",
    },
    "& h4":{
      margin: "0 10vw"
    }
  },

  textCenter: {
    textAlign: "center!important",
  },
  // img: {
  //   width: "100%",
  //   height: "100%",
  // },

  // imgSquare: {
  //   borderRadius: "0%"
  // },

  textMuted: {
    color: grayColor[7] + " !important",
  },
  justifyContent: {
    justifyContent: "center!important",
  },
  bgColor: {
    backgroundColor: "#2c83c3",
  },
  accordionContainer:{
    color: grayColor,
    margin: "0 10%",
  }
};

export default teamStyle;
