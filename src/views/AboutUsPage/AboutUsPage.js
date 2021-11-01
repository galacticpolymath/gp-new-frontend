/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { renderMetaTags } from "utils/meta";

import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionPartners from "./Sections/SectionPartners";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import GetInvolved from "views/AboutUsPage/Sections/GetInvolved.js";

// styling
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage(...rest) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      {renderMetaTags(
        'About',
        "Galactic Polymath (GP) is an education studio. We help scientists, nonprofits, and sustainable companies achieve outreach at scale by translating complex, cutting-edge research into FREE, mind-blowing lessons for grades 5+. GP was created by scientists and teachers to connect scientists and teachers. We do the heavy lifting: creating and disseminating mind-expanding lessons that engage young learners in the knowledge areas our clients care about, while taking teachers' feedback and perspectives into consideration at every step of development.",
        'https://res.cloudinary.com/galactic-polymath/image/upload/v1593304395/logos/GP_full_stacked_grad_whiteBG_llfyal.png'
      )}
      <Header
        links={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer style={{ placeItems: "center" }}>
            <GridItem
              xs={12}
              sm={12}
              md={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
              style={{ paddingTop: "3", paddingRight: "5px" }}
            >
              <h1 className={classes.title}>About GP</h1>
              <h4
                className={classes.title}
                style={{ letterSpacing: "1.5px", fontWeight: 500 }}
              >
                Galactic Polymath (GP) is an education studio.{"\n"} We help
                scientists, nonprofits, and sustainable companies achieve
                outreach at scale by translating complex, cutting-edge research
                into mind-blowing lessons for grades 5+.
              </h4>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={6}
              className={classNames(
                classes.hideLogo,
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <img
                src={require("assets/img/hero-images/AboutPage_Bubbles.png")}
                height="auto"
                width="120%"
                alt={
                  "vertical lines with multicolored points threaded on them in a wavy pattern"
                }
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionServices />
          <SectionDescription />
          <SectionTeam />
          <SectionPartners />
          <GetInvolved />
        </div>
      </div>
    </div>
  );
}
