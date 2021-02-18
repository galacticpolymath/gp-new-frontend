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
  pinkBackground: {
    backgroundColor: "#FF3DAC",
    borderRadius: "25px",
  },
  purpleBackground: {
    backgroundColor: "#9F4BFF",
    borderRadius: "25px",
  },
  darkGreyFont: {
    color: "#828282",
  },
  headerPadding: {
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  topPadding: {
    paddingTop: "30px",
  },
  topPadding2: {
    paddingTop: "50px",
  },
  textLeft: {
    textAlign: "left",
    paddingLeft: "70px",
  },
};

const useStyles = makeStyles(style);

export default function SectionLessonData() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <h2
        className={classNames(
          classes.title,
          classes.justifyContentSpaceBetween
        )}
      >
        Bridging the gap between classroom and lab
      </h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classNames(classes.pinkBackground)}>
              <h3 className={classes.headerPadding}>FOR TEACHERS</h3>
              <div className={classes.textLeft}>
                <div>
                  <p>Free, open-access lessons</p>
                </div>
                <div>
                  <p>Regularly updated based on your feedback</p>
                </div>
                <div>
                  <p>Appropriate for grades 5-12</p>
                </div>
                <div>
                  <p>
                    Adaptable for different time lengths, extension activities,
                    etc.
                  </p>
                </div>
              </div>
              <div className={classes.topPadding2}>
                <Button
                  color="white"
                  size="md"
                  href="https://vimeo.com/448000812"
                  target="_blank"
                  padding="100px"
                >
                  <i className="fas" />
                  <b className={classes.darkGreyFont}>GET LESSONS</b>
                </Button>
              </div>
              <div className={classes.topPadding}></div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classNames(classes.purpleBackground)}>
              <h3 className={classes.headerPadding}>FOR RESEARCHERS</h3>
              <div className={classes.textLeft}>
                <div>
                  <p>Contribute to lower-academic success</p>
                </div>
                <div>
                  <p>Increase impact of your research</p>
                </div>
                <div>
                  <p>Include community outreach in scope of work</p>
                </div>
                <div>
                  <p>
                    Various levels of contribution and involvement available.
                  </p>
                </div>
              </div>
              <div className={classes.topPadding2}>
                <Button
                  color="white"
                  size="md"
                  href="https://vimeo.com/448000812"
                  target="_blank"
                  padding="100px"
                >
                  <i className="fas" />
                  <b className={classes.darkGreyFont}>SUBMIT DATA</b>
                </Button>
              </div>
              <div className={classes.topPadding}></div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
