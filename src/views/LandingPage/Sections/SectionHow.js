import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center",
  },
  primaryColor: {
    color: "#2C83C3",
  },
  fontStyle: {
    fontSize: "16px",
    color: "black",
  },
  purp: {
    color: "#6C2D82",
  },
  lightPurp: {
    color: "#6812D1",
  },
  upperCase: {
    textTransform: "uppercase",
  },
  paddingTop: {
    paddingTop: "30px",
  },
  paddingLeft: {
    paddingLeft: "100px",
  },
  imagePadding: {
    paddingTop: "50px",
    paddingRight: "70px",
  },

  // marginRight: {
  //   marginRight: "20%",
  // },
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <h1
            className={classNames(
              classes.title,
              classes.purp,
              classes.marginRight
            )}
          >
            How we do it
          </h1>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <img
            src={
              "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357041/assets_marketing/Vector_-_dotten_line_mvnvza.svg"
            }
            className={classes.imagePadding}
            height="auto"
            width="110%"
            alt={"Lesson Preview"}
          />
        </GridItem>
      </GridContainer>
      <div>
        <br></br>
        <br></br>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <div
              className={classNames(
                classes.fontStyle,
                classes.primaryColor,
                classes.upperCase
              )}
            >
              <div>
                <p>Researchers</p>
                <p>non-profits</p>
                <p>sustainable corps.</p>
              </div>
              <br></br>
              <div>
                <p>select,</p>
                <p>award-winning</p>
                <p>science-communicators</p>
              </div>
              <br></br>
              <div>
                <p>Implemented by</p>
                <p>educators</p>
                <p>in classrooms</p>
              </div>
              <br></br>
              <div>
                <p>evaluated,</p>
                <p>revised,</p>
                <p>repeat</p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <div className={classNames(classes.fontStyle)}>
              <div className={classes.paddingTop}>
                <p>
                  Real scientists complete their research, covering complex
                  topics on relevant, modern issues.
                </p>
              </div>
              <br></br>
              <div className={classes.paddingTop}>
                <p>
                  Our team of SciComm educators translates those complex topics
                  into grade 5+ lesson plans accessible to any teacher.
                </p>
              </div>
              <br></br>
              <div className={classes.paddingTop}>
                <p>
                  Working closely with a variety of educators, our lesson plans
                  are implemented in real classrooms.
                </p>
              </div>
              <br></br>
              <div className={classes.paddingTop}>
                <p>
                  All of our lessons are continously evaluated, updated, and
                  revised—meaning they are always up-to-date.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={2} md={4}>
            <div className={classes.fontStyle}>
              <div>
                <p>We empower students with agency and critical thinking.</p>
              </div>
              <div>
                <p>
                  Students learn better when lessons are contextualized in
                  real-world scenarios and concepts are connected across
                  subjects—so that’s what we do.
                </p>
              </div>
              <div>
                <p>
                  Our lessons are flexible and adaptive, giving classroom
                  teachers the freedom to adjust the material to fit their plan.
                </p>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <footer
          className={classNames(
            classes.fontStyle,
            classes.paddingTop,
            classes.lightPurp,
            classes.upperCase
          )}
        >
          <h4>
            <b>
              Real research + real stories + real data + real careers = Real
              learning
            </b>
          </h4>
        </footer>
      </div>
    </div>
  );
}
