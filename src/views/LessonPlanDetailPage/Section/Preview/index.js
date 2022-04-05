import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import RichText from "../../../../components/RichText";

import './style.scss'

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import CollapsibleSection from "../CollapsibleSection";
import Carousel from "./Carousel";
import Card from "components/Card/Card.js";
const useStyles = makeStyles(lessonPlanStyle);


const Preview = ({
  index,
  SectionTitle,
  InitiallyExpanded,
  Multimedia,
  QuickPrep,
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      className="Preview CollapsibleTextSection"
      index={index}
      SectionTitle={SectionTitle}
      initiallyExpanded={InitiallyExpanded !== false}
    >
      <div className={classes.container}>
        <Carousel items={Multimedia} />
        <Card className={classes.quickPrep}>
          <h5>&quot;Teach it in 15&quot; Quick Prep</h5>
          <RichText content={QuickPrep} />
        </Card>
      </div>
    </CollapsibleSection>
  );
};

Preview.propTypes = {
  Content: PropTypes.string,
};

export default Preview;
