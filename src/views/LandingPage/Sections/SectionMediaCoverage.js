import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
// import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";
import { primaryColor } from "assets/jss/material-kit-pro-react.js";
import sciamCover from "assets/img/sciamCover.jpg"
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button";
import Card from "components/Card/Card.js";



const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  bubble1: {
    display: "inline-block",
    placeContent: "center",
    // border: "1px solid "+ grayColor[0],
    padding: "5px",
    borderRadius: "10px",
    margin: "0.75rem 0.5rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1.2em",
      margin: "auto 0",
      align: "center"
    }

  },
  bubble2: {
    display: "inline-block",
    color: primaryColor[0],
    backgroundColor: "white",
    placeContent: "center",
    border: "2px solid " + primaryColor[0],
    padding: "5px",
    borderRadius: "10px",
    margin: "0.75rem 0.5rem"
  },
  narrowSection: {
    padding: "1rem 1rem 2rem",
    backgroundColor: primaryColor[5],
    border: "1px solid " + primaryColor[0],
    // height: "30vh",
  },
  infotainer:{


  },
  coverImg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",


  },

  //Special styling for sm to medium devices
  "@media only screen and (min-width: 0px) and (max-width: 959px)": {},

  // Correct H3 size for medium screens where 4 columns are first displayed
  "@media only screen and (min-width: 960px) and (max-width: 1279px)": {}


};

const useStyles = makeStyles(style);

export default function SectionMediaCoverage() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.narrowSection)}>
    <GridContainer>
      <GridItem xs={0} sm={0} md={1} lg={2}/>
      <GridItem xs={12} sm={6} md={5} lg={4}>
        <Card>
        <img src={sciamCover} alt="Scientific American cover featuring barn swallows" className={classes.coverImg}/>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={6} lg={4}>
        <h3>Our lesson "Females Singing to be heard" featured in <em>Scientific American</em>.
        </h3>
        <Button
          color="primary"
          style={{width: "12rem",marginTop: "1rem"}}
          href="https://www.scientificamerican.com/article/why-it-took-so-long-to-appreciate-female-birds-songs/">
          Read the Article
        </Button>
        <div>
        <Button
          color="rose"
          style={{width: "12rem",marginTop: ".5rem"}}
        href="lessons/1">
          Check out the lesson
      </Button>
        </div>
      </GridItem>1
      <GridItem xs={0} sm={0} md={0} lg={2}/>

    </GridContainer>
      </div>
  );
}
