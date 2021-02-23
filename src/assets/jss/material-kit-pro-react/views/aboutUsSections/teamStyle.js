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
    padding: "1rem"
  },
  team: {
    // padding: "80px 0px",
  },
  textCenter: {
    textAlign: "center!important",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  textMuted: {
    color: grayColor[7] + " !important",
  },
  justifyContent: {
    justifyContent: "center!important",
  },
  bgColor: {
    backgroundColor: "#2c83c3",
  },
  teamGridContainer: {
    // display: "grid",
    // gridTemplateRows: "content auto"
  }
};

export default teamStyle;
