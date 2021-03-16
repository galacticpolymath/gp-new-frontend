import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./Sections/SectionPills.js";
import LessonCards from "./Sections/LessonCards.js";

import GPcopyrightFooter from "../../components/Footer/GPcopyrightFooter";

import lessons from "../LessonPlanDetailPage/data/lesson-plans.json";
import lessonsPageStyle from "assets/jss/material-kit-pro-react/views/lessonsPageStyle.js";
const useStyles = makeStyles(lessonsPageStyle);

export default function LessonsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
      />
      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer style={{ placeItems: "center" }}>
            <GridItem
              xs={12}
              md={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
              style={{ paddingTop: "3%", paddingRight: "25px" }}
            >
              <h1 className={classNames(classes.title, classes.longTitle)}>
                Interdisciplinary Lessons
              </h1>
              <h4
                className={classes.title}
                style={{ letterSpacing: "1.5px", fontWeight: 500 }}
              >
                Our lessons are free. We strive to create mind-expanding
                learning experiences that a non-specialist can teach in{" "}
                <em>any G5-12 classroom</em> with 15 minutes of prep time!
              </h4>
            </GridItem>
            <GridItem
              xs={12}
              md={6}
              className={classNames(
                classes.hideLogo,
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <img
                src={require("assets/img/hero-images/Lessons_VerticalDotandline.svg")}
                height="auto"
                width="120%"
                alt={"vertical geometric line and dot pattern"}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionPills />
          {lessons && <LessonCards lessons={lessons} />}
        </div>
      </div>
      <Footer content={<GPcopyrightFooter />} />
    </div>
  );
}
