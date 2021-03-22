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
// import CardMedia from "@material-ui/core/CardMedia";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
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
    padding: "30px"
  },
  pinkBackground: {
    backgroundColor: "#FF3DAC",
    borderRadius: "25px"
  },
  purpleBackground: {
    backgroundColor: "#9F4BFF",
    borderRadius: "25px"
  },
  darkGreyFont: {
    color: "#828282"
  },
  whiteFont: {
    color: "white"
  },
  headerPadding: {
    paddingTop: "2rem",
    paddingBottom: 0,
    marginBottom: 0
  },
  topPadding: {
    paddingTop: "30px"
  },
  boxContainer:{
  display: "grid"

  },
  buttonAtBottom: {
    alignSelf: "end",
    paddingTop: "1rem",
    paddingBottom: "2rem",
    justifySelf: "center",
    gridAutoRows: "1fr"
    // padding: "2rem 0",
  },
  bottomPadding: {
    paddingBottom: "30px"
  },
  bullets: {
    textAlign: "left",
    paddingBottom: "1rem",
    "& *": {
      padding: "0.25rem 1rem",
      lineHeight: "1.1"
    }
  },
  backgroundImgPencil: {
    backgroundImage: `url(${"https://res.cloudinary.com/galactic-polymath/image/upload/v1614120447/assets_marketing/Pencil_Pink_zlrglm.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  backgroundImgCircuit: {
    backgroundImage: `url(${"https://res.cloudinary.com/galactic-polymath/image/upload/v1614120418/assets_marketing/Circuit_Purple_rc3hmy.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  // buttonOnBottom: {
  //   position: "absolute",
  //   // right: "-1",
  //   // left: "px",
  //   bottom: "0",
  // },
};

const useStyles = makeStyles(style);

export default function SectionLessonData() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.greyBackground)}>
      <h2 className={classNames(classes.justifyContentSpaceBetween)}>
        Connecting classrooms to the world of Academia
      </h2>
      <div className={classes.topPadding}>
        <GridContainer
        className={classes.justifyContentCenter}>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <div
              className={classNames(
                classes.pinkBackground,
                classes.backgroundImgPencil,
                classes.whiteFont,
                classes.boxContainer,
              )}
            >
              <h3 className={classes.headerPadding}>FOR TEACHERS</h3>
              <div className={classes.bullets}>
                <div>
                  <h4>Free, open-access, high-quality lessons</h4>
                </div>
                <div>
                  <h4>Regularly updated based on your feedback</h4>
                </div>
                <div>
                  <h4>Differentiated for grades 5-6, 7-8 & 9-12</h4>
                </div>
                <div>
                  <h4>
                    Adaptable for different time lengths, extension activities,
                    etc.
                  </h4>
                </div>
              </div>
              <div className={classes.buttonAtBottom}>
                <Button
                  color="white"
                  href="lessons/"
                >
                  <i className="fas" />
                  <b className={classes.darkGreyFont}>GET LESSONS</b>
                </Button>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}
                    style={{
                      display: "grid",

                    }}>
            <div
              className={classNames(
                classes.purpleBackground,
                classes.backgroundImgCircuit,
                classes.whiteFont,
                classes.boxContainer,
              )}
            >
              <h3 className={classes.headerPadding}>FOR RESEARCHERS</h3>
              <div className={classes.bullets}>
                <div>
                  <h4>
                    Magnify the impact of your research and outreach efforts
                  </h4>
                </div>
                <div>
                  <h4>Get detailed impact metrics to report to funders</h4>
                </div>
                <div>
                  <h4>
                    If you love GP, but don't have the funds to hire us,&nbsp;
                    <a href="/About#getInvolved" style={{ paddingLeft: 0 }}>
                      <b style={{ color: "white", paddingLeft: 0 }}>there are also many avenues for collaboration!</b>
                    </a>

                  </h4>
                </div>
              </div>
              <div className={classes.buttonAtBottom}>
                <Button
                  color="white"
                  href="/hire-us"
                  // className={classes.buttonOnBottom}
                >
                  <i className="fas" />
                  <b className={classes.darkGreyFont}>Learn More</b>
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
