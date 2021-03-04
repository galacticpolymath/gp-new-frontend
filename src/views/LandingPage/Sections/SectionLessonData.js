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
    padding: "20px",
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
  backgroundImgPencil: {
    backgroundImage: `url(${"https://res.cloudinary.com/galactic-polymath/image/upload/v1614120447/assets_marketing/Pencil_Pink_zlrglm.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  backgroundImgCircuit: {
    backgroundImage: `url(${"https://res.cloudinary.com/galactic-polymath/image/upload/v1614120418/assets_marketing/Circuit_Purple_rc3hmy.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

const useStyles = makeStyles(style);

export default function SectionLessonData() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.greyBackground)}>
      <h2
        className={classNames(
          classes.title,
          classes.justifyContentSpaceBetween
        )}
      >
        Bridging the gap between classroom and lab
      </h2>
      <div>
        <GridContainer
          style={{gridAutoRows: "1fr",  gridColumnGap: "0",display: "flexContainer"}}
        >
          <GridItem xs={12} sm={6} md={6}  style={{display: "grid"}}>
            <div
              className={classNames(
                classes.pinkBackground,
                classes.backgroundImgPencil
              )}
            >
              <h3 className={classes.headerPadding}>FOR TEACHERS</h3>
              <div className={classes.textLeft}>
                <div>
                  <h4>Free, open-access lessons</h4>
                </div>
                <div>
                  <h4>Regularly updated based on your feedback</h4>
                </div>
                <div>
                  <h4>Appropriate for grades 5-12</h4>
                </div>
                <div>
                  <h4>
                    Adaptable for different time lengths, extension activities,
                    etc.
                  </h4>
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
              {/*<div className={classes.topPadding}></div>*/}
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}  style={{display: "grid"}}>
            <div
              className={classNames(
                classes.purpleBackground,
                classes.backgroundImgCircuit
              )}
            >
              <h3 className={classes.headerPadding}>FOR RESEARCHERS</h3>
              <div className={classes.textLeft}>
                <div>
                  <h4>Magnify the impact of your research and outreach efforts</h4>
                </div>
                <div>
                  <h4>Get detailed impact metrics to report to funders</h4>
                </div>
                <div>
                  <h4>
                    If you don't have the funds to hire us, <a href="/About#getInvolved">there are many avenues for collaboration!</a>
                  </h4>
                </div>
              </div>
              <div className={classes.topPadding2}>
                <Button
                  color="white"
                  size="md"
                  href="/hire-us"
                  padding="100px"
                >
                  <i className="fas" />
                  <b className={classes.darkGreyFont}>Learn More</b>
                </Button>
              </div>
              {/*<div className={classes.topPadding}></div>*/}
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
