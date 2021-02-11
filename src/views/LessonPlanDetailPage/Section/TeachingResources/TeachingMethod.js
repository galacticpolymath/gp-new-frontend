import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import ResourceSummary from "./ResourceSummary";
import ResourceDownload from "./ResourceDownload/index";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const TeachingMethod = ({
  index,
  Title,
  ResourceSummary: Summary,
  ResourceDownloads = [],
}) => {
  const classes = useStyles();
  return (
    <div className="accordion TeachingMethod" defaultActiveKey={index}>
      <div className={classes.container}>
        <div className="accordion-toggle" variant="link" eventKey={index}>
          <h3>{Title}</h3>
        </div>
      </div>
      <div className="accordion-container" eventKey={index}>
        <div className={classes.container}>
          <ResourceSummary {...Summary} />
          {ResourceDownloads.map((resource, i) => (
            <ResourceDownload key={i} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

TeachingMethod.propTypes = {
  index: PropTypes.number,
  Title: PropTypes.string,
  ResourceSummary: PropTypes.object,
  ResourceDownloads: PropTypes.array,
};

export default TeachingMethod;
