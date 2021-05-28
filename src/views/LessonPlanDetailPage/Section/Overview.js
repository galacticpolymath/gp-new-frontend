import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem";
import Image from "../../../components/StrapiImage";
import TagCloud from "../../../components/TagCloud";
import RichText from "../../../components/RichText";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Material UI Icons
import FaceIcon from "@material-ui/icons/Face";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ScheduleIcon from "@material-ui/icons/Schedule";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import CollapsibleSection from "./CollapsibleSection";

const useStyles = makeStyles(lessonPlanStyle);

const Overview = ({
  index,
  EstLessonTime,
  ForGrades,
  TargetSubject,
  SteamEpaulette,
  Text,
  Tags
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      className={"Overview"}
      index={index}
      SectionTitle={`Overview`}
      initiallyExpanded
    >
      <div className={classes.container}>
        <Card className="stats">
          <GridContainer>
            <AnchorLink href={"#standards"} offset={"125px"}>
            <Image {...SteamEpaulette} className="epaulette" />
          </AnchorLink>
            <GridItem sm={4} className="border-right">
              <MenuBookIcon fontSize="large" className={"statIcon"} />
              <h5>Target Subject: </h5>
              <div className="statContainer">
                <h3>{TargetSubject}</h3>
              </div>
            </GridItem>
            <GridItem sm={4} className="border-right">
              <FaceIcon fontSize="large" className={"statIcon"} />
              <h5>Grades: </h5>
              <div className="statContainer">
                <h3>{ForGrades}</h3>
              </div>
            </GridItem>
            <GridItem sm={4} >
              <ScheduleIcon fontSize="large" className={"statIcon"} />
              <h5>Estimated Time: </h5>
              <div className="statContainer" id="lastGridItem">
                <h3>{EstLessonTime}</h3>
              </div>
            </GridItem>

          </GridContainer>
        </Card>


        <RichText content={Text} />

        <h5>Keywords:</h5>
        {Tags && <TagCloud tags={Tags} />}
      </div>
    </CollapsibleSection>
  );
};

Overview.propTypes = {
  index: PropTypes.number,
  EstLessonTime: PropTypes.string,
  ForGrades: PropTypes.string,
  TargetSubject: PropTypes.string,
  SteamEpaulette: PropTypes.object,
  Text: PropTypes.string,
  Tags: PropTypes.array
};

export default Overview;
