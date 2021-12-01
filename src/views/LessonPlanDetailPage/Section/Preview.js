import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import RichText from "../../../components/RichText";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import CollapsibleSection from "./CollapsibleSection";
const useStyles = makeStyles(lessonPlanStyle);

const Preview = ({
  index,
  SectionTitle,
  InitiallyExpanded,
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
        TODO: Media player...

        <h5>&quot;Teach it in 15&quot; Quick Prep</h5>
        <ol>
          <li>TODO</li>
          <li>TODO</li>
        </ol>
      </div>
    </CollapsibleSection>
  );
};

Preview.propTypes = {
  Content: PropTypes.string,
};

export default Preview;
