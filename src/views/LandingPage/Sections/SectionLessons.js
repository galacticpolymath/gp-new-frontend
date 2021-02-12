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
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  primaryColor: {
    color: "#2C83C3",
  },
  fontStyle: {
    fontSize: "16px",
    color: "black",
  },
  greyBackground: {
    backgroundColor: "#E0E0E0",
  },
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <h1
        className={classNames(
          classes.title,
          classes.primaryColor,
          classes.justifyContentSpaceBetween
        )}
      >
        Think Bigger. Learn Everything.
      </h1>
      <div>
        <br></br>
        <GridContainer>
          <GridItem xs={12} sm={7} md={7}>
            <img
              src={
                "https://res.cloudinary.com/galactic-polymath/image/upload/v1612981509/assets_marketing/FemalesSing_banner_title_leniw2.jpg"
              }
              height="auto"
              width="100%"
              alt={"Lesson Preview"}
            />
          </GridItem>
          <GridItem xs={12} sm={5} md={5}>
            <div className={classes.fontStyle}>
              <br></br>
              <br></br>
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
              <div>
                <br></br>
                <Button
                  color="primary"
                  size="lg"
                  href="https://vimeo.com/448000812"
                  target="_blank"
                  padding="100px"
                >
                  <i className="fas" />
                  See Lessons
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
