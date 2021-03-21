import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import StarIcon from '@material-ui/icons/Star';
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";
import {
  warningColor,
  grayColor,
  primaryColor,
  roseColor,
  hexToRgb,
  blackColor,
} from "../../../assets/jss/material-kit-pro-react";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentLeft: {
    textAlign: "left"
  },
  primaryColor: {
    color: primaryColor[0]
  },
  featuredLessonLabel:{
    float: "left",
    display: "flex",
    zIndex: "2",
    backgroundColor: roseColor[3],
    border: "1px solid"+ blackColor,
    marginTop: "10px",
    marginBottom: "-20px",
    textTransform: "uppercase",
    color: blackColor,
    padding: "10px",
    // remove automargin for h4
    "& *": {
      margin: 0,
      fontWeight: "400",
      // alignSelf: "center",
    },
    // add padding to star
    "& > :first-child":{
      paddingRight: "4px"
    }
  },
  fontStyle: {
    fontSize: "16px",
    color: "black"
  },
  greyBackground: {
    backgroundColor: "#E0E0E0",
    padding: "4rem 2rem 6rem"
  },
  doubleSpaced: {
    paddingBottom: ".5em"
  },
  lessonCover:{
    // border: "2px solid" + grayColor[6],
    backgroundColor: "white",
    zIndex: "0",
    paddingTop: "20px",
    boxShadow:
    "0 16px 38px -12px rgba(" +
        hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)"
  },
  purpleUnderline: {
    textDecoration: "underline #6912D1"
  },
  pinkUnderline: {
    textDecoration: "underline #FF3DAC"
  },
  blueUnderline: {
    textDecoration: "underline #2C83C3"
  },
  thinkBigger: {
    display: "block",

    margin: "2rem auto 6rem",
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
    /* tablets */

    thinkBigger: {
      "& h1": {
        fontSize: "1.9rem"
      }
    }
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        classes.section,
        classes.greyBackground,
        classes.justifyContentCenter
      )}
    >
      <div>
        <br />
        {/*Think Bigger Tagline*/}
        <GridContainer style={{placeItems:"center"}}>
          <div
          className={classNames(classes.thinkBigger)}
        >
          <h1>
            <span style={{whiteSpace:"nowrap",textAlign: "left"}}>Think <b>bigger</b>.</span>
          </h1>
          <h1>
            <span style={{whiteSpace:"nowrap"}}>Learn everything.</span>
          </h1>
          </div>
        </GridContainer>

        {/*Featured lesson*/}
        <GridContainer >
          <GridItem xs={12} sm={12} md={7}>
            <Card   style={{paddingBottom: "20px",}}>
              <CardBody style={{backgroundColor: "transparent",}}>
                <GridContainer
                  style={{ display: "flex", alignContent: "middle",backgroundColor: "transparent" }}>
                  <span className={classes.featuredLessonLabel}>
                      <StarIcon/> <h4> Featured Lesson</h4>
                    </span>
                  <GridItem xs={10}>
                    {/*Featured Lesson Label*/}

                    {/*lesson cover image*/}
                    <img
                      src={
                        "https://res.cloudinary.com/galactic-polymath/image/upload/v1616346791/lesson_misc_share/FemalesSing_Title_Slide_cchr8u.svg"
                      }
                      height="auto"
                      width="100%"
                      alt={"Lesson Preview"}
                      className={classes.lessonCover}
                    />
                  </GridItem>
                  {/*Sponsor Logo*/}
                  <GridItem xs={2}
                            style={{ alignSelf: "center" }}>
                    <h4>Sponsor:</h4>
                    <img
                      src={
                        "https://res.cloudinary.com/galactic-polymath/image/upload/v1616347064/ClientLogos/sponsor-logo_ABS_xsfosa.png"
                      }
                      height="auto"
                      width="100%"
                      alt={"Lesson Preview"}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>

          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <div
              className={classNames(
                classes.fontStyle,
                classes.justifyContentLeft
              )}
            >
              {/*<h1 className={classNames(classes.title, classes.primaryColor)}>*/}
              {/*  Think Bigger. <br /> Learn Everything.*/}
              {/*</h1>*/}
              <div className={classes.doubleSpaced}>
                <h3>
                  We empower students with <br />{" "}
                  <span className={classes.purpleUnderline}>agency</span> and{" "}
                  <span className={classes.pinkUnderline}>
                    critical thinking.
                  </span>
                </h3>
              </div>
              <div className={classes.doubleSpaced}>
                <h4>
                  Students learn better when lessons are <br />
                  contextualized in real-world scenarios and <br />
                  concepts are connected across subjects— <br />
                  <span className={classes.blueUnderline}>
                    so that’s what we do.
                  </span>
                </h4>
              </div>
              <div>
                <h4>
                  We use current, real-world scientific studies and <br />
                  data submitted to us by real-life scientists and <br />
                  labs.
                </h4>
              </div>
              <div>
                <h4>
                  Our lessons are flexible and adaptive, giving <br />
                  classroom teachers the freedom to adjust the <br />
                  material to fit their plan.
                </h4>
              </div>
              <div>
                <Button
                  color="primary"
                  size="lg"
                  href="/lessons/1"
                  target="_blank"
                  padding="100px"
                >
                  <i className="fas" />
                  See Our First Lesson
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
