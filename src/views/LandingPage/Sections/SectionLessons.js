import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import StarIcon from '@material-ui/icons/Star';
// import  image
import FeaturedLessonImg from "assets/img/featuredLesson_card.jpg";
import SponsorLogo from "assets/img/featuredSponsor_logo.jpg";

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
  // grayColor,
  primaryColor,
  roseColor,
  hexToRgb,
  blackColor,
} from "../../../assets/jss/material-kit-pro-react";
import CreateIcon from "@material-ui/icons/Create";

const style = {
  ...teamsStyle,
  ...teamStyle,
  doubleSpaced: {
    "& h3, h4":{
      paddingBottom: ".8rem"
    },

  },
  newRelease:{
    display: "flex",
    zIndex: "200",
    height: "35px",
    backgroundColor: roseColor[3],
    border: "1px solid"+ blackColor,
    position: "absolute",
    top: "-0.3rem",
    left: "20px",
    marginTop: "20px ",
    textTransform: "uppercase",
    color: blackColor,
    padding: "0.25rem",
    // remove automargin for h4
    "& *": {
      margin: 0,
      fontWeight: "400",
      // alignSelf: "center",
    },
    // add padding to star
    "& > :first-child":{
      paddingRight: "4px"
    },
    "@media only screen and (max-width: 600px)":{
      padding: "0.2rem",
      marginBottom: "-10px",
      "& h4": {
        fontSize: "0.7rem",
        marginRight: "0.2rem"
      },
      "& svg": {
        height: "0.7rem",
        marginTop: "auto",
        marginBottom: "auto",
        paddingRight: "6px",
        paddingLeft: 0

      }

    }
  },
  fontStyle: {
    fontSize: "16px",
    color: "black"
  },
  greyBackground: {
    backgroundColor: "#E0E0E0",
    padding: "4rem 2rem 6rem",
    border: "1px solid #c0c1c2"
  },
  justifyContentCenter: {
    justifyContents: "center",
    display: "gridContainer"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyTextLeft: {
    textAlign: "left"
  },
  lessonCard:{
    // border: "2px solid" + grayColor[6],
    backgroundColor: "white",
    marginTop: "20px",
    zIndex: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)"
  },
  lessonDescriptors:{
    marginRight: "auto",
    marginLeft: "auto",
    padding: "20px 1rem"
  },
  logo:{
    alignSelf: "center",
    width: "100%",
    height: "auto",


    "@media only screen and (max-width: 960px)":{
      minHeight: "100px",
      maxWidth:"50vw",
    },

  },
  logoContainer:{
    margin: "auto"
  },
  primaryColor: {
    color: primaryColor[0]
  },

  purpleText: {
    color: "#6912D1",
    fontWeight: "500",
    fontStyle:"italic"
  },
  pinkText: {
    color: roseColor[0],
    fontWeight: "500",
    fontStyle:"italic"
  },
  blueText: {
    color: "#2C83C3",
    fontWeight: "500",
    fontStyle:"italic"
  },
  blackText:{
    fontWeight: "500",
    fontStyle:"italic"
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
    },
    lessonCard:{
      marginBottom:"3rem"
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
          <GridItem xs={12} sm={12} md={12} lg={7} >
            <Card   style={{paddingBottom: "20px",}}>
              <CardBody>
                <GridContainer>
                  <div className={classes.newRelease}>
                      <StarIcon/> <h4> New Release!</h4>
                    </div>
                  <GridItem xs={12} md={9}>
                    <a href="/lessons/4">
                    {/*Featured Lesson Label*/}

                    {/*lesson cover image*/}
                    <img
                      src={FeaturedLessonImg}
                      height="auto"
                      width="100%"
                      alt={"Lesson Card Cover"}
                      className={classes.lessonCard}
                    />
                  </a>
                  </GridItem>

                  {/*Sponsor Logo*/}
                  <GridItem xs={12} md={3}
                           className={classes.logoContainer}>
                    <h4>Sponsor</h4>
                    <img
                      src={SponsorLogo}
                      className={classes.logo}
                      alt={"Lesson Preview"}

                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>

          </GridItem>

          {/*Lesson descriptor/ add copy*/}
          <GridItem xs={12} sm={10} md={8} lg={5}
                    className={classNames(
                      classes.fontStyle,
                      classes.justifyTextLeft,
                      classes.justifyContentCenter,
                      classes.lessonDescriptors,
                    )}>
              <div className={classes.doubleSpaced}>
                <h3 style={{fontWeight:500}}>
                  We want to <span>empower&nbsp;students </span>
                  with <em> agency</em> and <em>critical thinking.</em>

                </h3>
              </div>
              <div className={classes.doubleSpaced}>
                <h4>
                  Our lessons can be <span className={classes.blackText}>taught in any subject classroom! </span>
                  We align to learning standards in ELA, math, social studies and science to
                  provide deeper understanding and longer retention.
                  {/*Students learn better when lessons are*/}
                  {/*contextualized in real-world scenarios and*/}
                  {/*concepts are connected across subjects.&nbsp;*/}
                  {/*<span className={classes.blackText}>*/}
                  {/*  This informs every lesson we design!*/}
                  {/*</span>*/}
                </h4>
              </div>
              <div className={classes.doubleSpaced}>
                <h4>
                  We build lessons around <span className={classes.blackText}>real research, data, and stories</span> from diverse STEM experts.
                </h4>
              </div>
              <div
              style={{padding:"1.5rem 0 "}}>
                <Button
                  color="primary"
                  size="lg"
                  href="/lessons/4"
                >
                  <CreateIcon />
                  <i className="fas" />
                  See this lesson
                </Button>
              </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
