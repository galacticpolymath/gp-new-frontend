import React, { useEffect } from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import BlurOn from "@material-ui/icons/BlurOn";
import CreateIcon from "@material-ui/icons/Create";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

import SectionAbout from "./Sections/SectionAbout.js";
import SectionLessons from "./Sections/SectionLessons.js";
import SectionHow from "./Sections/SectionHow.js";
import SectionBenefits from "./Sections/SectionBenefits.js";
import SectionJobViz from "./Sections/SectionJobViz";
import SectionGPEquation from "./Sections/SectionGPEquation";
import ParallaxImage from "assets/img/hero-images/landingPage-CityNetwork@75x-20.jpg";

const useStyles = makeStyles(landingPageStyle);

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

export default function LandingPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#470F2C" }}>
      <Header
        color="transparent"
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...props}
      />
      <Parallax image={ParallaxImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div>
                <h1 className={classes.title}>
                  We are an <br /> education studio.
                </h1>
                <h4
                  style={{
                    backgroundColor: "rgba(71, 15, 44, 0.7)"
                  }}
                >
                  We translate current research into creative, interdisciplinary
                  lessons for grades 5+ that are <em>free for everyone.</em>
                </h4>
              </div>
              <br />
              <Button
                color="primary"
                size="lg"
                href="/lessons/"
                padding="100px"
              >
                <CreateIcon />
                Get Lessons
              </Button>
              <Button color="primary" size="lg" href="/hire-us/">
                <BlurOn />
                Do Outreach
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionAbout />
        </div>
        <SectionLessons />
        {/*This is How We Do It*/}
        <div className={classes.container}>
          <SectionHow />
        </div>
        <SectionJobViz />
        <SectionGPEquation />
        <SectionBenefits />

        <br />
      </div>
      <Footer
        theme={"transparent"}
        content={
          <div>
          </div>
        }
      />
    </div>
  );
}
