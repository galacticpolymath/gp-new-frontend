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
    justifyContent: "center"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentLeft: {
    textAlign: "left"
  },
  primaryColor: {
    color: "#2C83C3"
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
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.greyBackground,
      classes.justifyContentCenter)}>
      <h2
        className={classNames(
          classes.title,
          classes.primaryColor
        )}
      >
        Think&nbsp;Bigger. Learn&nbsp;Everything.
      </h2>
      <div>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
            <img
              src={
                "https://res.cloudinary.com/galactic-polymath/image/upload/v1612981509/assets_marketing/FemalesSing_banner_title_leniw2.jpg"
              }
              height="auto"
              width="100%"
              alt={"Lesson Preview"}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <div className={classNames(classes.fontStyle, classes.justifyContentLeft)}>
              <br/>
              <br/>
              <div className={classes.doubleSpaced}>
                <h4>We empower students with agency and critical thinking.</h4>
              </div>
              <div className={classes.doubleSpaced}>
                <h4>
                  Students learn better when lessons are contextualized in
                  real-world scenarios and concepts are connected across
                  subjects—so that’s what we do.
                </h4>
              </div>
              <div>
                <h4>
                  Our lessons are designed to save teachers time, with a goal of 15 min prep,
                  and delivered in open formats so teachers have the freedom to adjust and remix the material to fit
                  their needs.
                </h4>
              </div>
              <div>
                <br/>
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
