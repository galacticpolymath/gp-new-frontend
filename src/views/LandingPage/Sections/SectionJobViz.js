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
  lessonDescriptors:{
    marginRight: "auto",
    marginLeft: "auto",
    padding: "20px 1rem"
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
    lessonCover:{
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

export default function SectionJobViz() {
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
          <GridItem xs={12} sm={12} md={12} lg={7}>
            <Card   style={{paddingBottom: "20px",}}>
              <CardBody style={{backgroundColor: "transparent",}}>
                <GridContainer
                  style={{ display: "flex", alignContent: "middle",backgroundColor: "transparent" }}>
                  <span className={classes.featuredLessonLabel}>
                      <StarIcon/> <h4> Featured Lesson</h4>
                    </span>
                  <GridItem xs={12} md={10}>
                    <div style={{ padding:"75% 0 0 0",position:"relative" }}>
                      <iframe
                        src="https://player.vimeo.com/video/584633265?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                        style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%" }} title="Jobviz.mov"></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
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
                  Our goal is to <span>empower&nbsp;students </span>
                  with{" "}
                  <span className={classes.purpleText}>
                    agency</span> and{" "}
                  <span className={classes.pinkText}>
                    critical thinking.
                  </span>
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
              <div className={classes.doubleSpaced}>
                <h4>
                  GP lessons are <span className={classes.blackText}>FREE and ready-to-launch, in person or remotely with Nearpod!</span>
                  &nbsp;Teachers are free to edit and remix materials to meet their classroom needs.
                </h4>
              </div>
              <div
              style={{padding:"1.5rem 0 "}}>
                <Button
                  color="primary"
                  size="lg"
                  href="/lessons/1"
                >
                  <CreateIcon />
                  <i className="fas" />
                  See Our First Lesson
                </Button>
              </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
