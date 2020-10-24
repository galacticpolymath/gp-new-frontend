import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We Build Awesome Lessons</h2>
          <h4 className={classes.description}>
          They are creative, interdisciplinary, and weave real
          world data and puzzles into memorable learning experiences.
          We work tirelessly with teachers to make lessons better and
          easier to teach so they can spend less time planning and more
          time empowering students to think bigger – learn everything!
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <p>
                  The moment you use Material Kit, you know you’ve never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Develop"
            description={
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Make Edits"
            description={
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
