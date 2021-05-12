import {
  mrAuto,
  mlAuto,
  description,
  warningColor
} from "assets/jss/material-kit-pro-react.js";


const descriptionStyle = {
  textCenter: {
    textAlign: "center"
  },
  textLeft: {
    textAlign: "left"
  },
  aboutDescription: {
    padding: "70px 0 0 0",
    placeItems: "center"
  },
  mrAuto,
  mlAuto,
  description,
  img: {
    width: "100%"
  },
  thinkBigger: {
    display: "block",

    margin: "25vh auto",
    placeItems: "center",
    textAlign: "left",
    color: warningColor[0],
    "& h1": {
      width: "fit-content",
      lineHeight: ".8"
    },
    "& h1:nth-child(2)": {
      paddingLeft: "3rem"
    }
  },
  "@media only screen and (max-width: 960px)": {
    /* tablets */
    thinkBigger: {
      "& h1":{
      fontSize: "2.6rem"
    }
    }

  },
  "@media only screen and (max-width: 600px)": {
    /* sm phones */

    thinkBigger: {
      "& h1": {
        fontSize: "1.9rem"
      }
    }
  }
};

export default descriptionStyle;
