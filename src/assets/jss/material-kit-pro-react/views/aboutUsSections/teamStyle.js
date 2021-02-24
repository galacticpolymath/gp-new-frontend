import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor,
  } from "assets/jss/material-kit-pro-react.js";

const teamStyle = {
  mrAuto,
  mlAuto,
  title,
  description: {
    ...description,
    marginBottom: "80px",
  },
  cardTitle,
  cardDescription: {
    color: grayColor[3],
    padding: "1rem",
    paddingBottom: "0",
    marginBottom: 0
  },
  team: {
    // padding: "80px 0px",
  },

  sectionLabel:{
    padding: "12vh 2vh 2vh",
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
  img: {
    width: "100%",
    height: "100%",
  },

  imgSquare: {
    borderRadius: "0%"
  },

  textMuted: {
    color: grayColor[7] + " !important",
  },
  justifyContent: {
    justifyContent: "center!important",
  },
  bgColor: {
    backgroundColor: "#2c83c3",
  }
};

export default teamStyle;
