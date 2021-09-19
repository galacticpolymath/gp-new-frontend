import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import InsertChartOutlinedOutlined from "@material-ui/icons/InsertChartOutlinedOutlined";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import BlurOn from "@material-ui/icons/BlurOn";

import { roseColor } from "assets/jss/material-kit-pro-react.js";

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
          <h2 className={classes.title}>
            <BlurOn
               style={{ color: roseColor[0], fontSize:"2.6rem",marginLeft:"-2.6rem" }}/>
            Easier Outreach, Better Results
            </h2>
          <h3>
            We do the heavy lifting, creating and disseminating mind-expanding lessons that
            engage young learners in the knowledge areas our clients care about.
          </h3>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <h4>
                  In just a few short meetings, we define clients' outreach goals
                  and map out the lessons and supporting media that will achieve lasting
                  understanding in target areas.
                </h4>
              </span>
            }
            icon={ArtTrackIcon}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Publish"
            description={
              <span>
                <h4>
                  We create and publish lessons on our site and do the hard work of getting them out to teachers through
                  a growing network of educators, districts, and professional organizations.
                </h4>
              </span>
            }
            icon={CloudUploadIcon}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Revise & Report"
            description={
              <span>
                <h4>
                  We measure and maximize outreach performance—as we hear back from teachers, we improve the lessons, and collect
                  impact data, which we report back to clients upon request.
                </h4>
              </span>
            }
            icon={InsertChartOutlinedOutlined}
            iconColor="rose"
          />
        </GridItem>
        <h3 className={classNames(classes.textCenter,classes.mrAuto,classes.mlAuto)}>
          <b>Learn how we can level up your outreach in <a href={"hire-us/"}>Hire Us</a></b>
        </h3>
      </GridContainer>
    </div>
  );
}
