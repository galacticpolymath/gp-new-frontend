import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SchoolIcon from "@material-ui/icons/School";
import RemoteIcon from "@material-ui/icons/Laptop";

import ResourceSummary2 from "./ResourceSummary2";

const COPY = {
  remote: (
    <p>
      Everything you need to teach the lesson in person. Classroom lessons are
      designed to be led by a teacher, who will actively moderate discussions.
      Students will record their observations and reflections on printed
      handouts, as opposed to the remote version, where students respond
      digitally to embedded questions using Nearpod on their laptop.
    </p>
  ),
  in_person: (
    <p>
      Everything you need to teach the lesson in person. Classroom lessons are
      designed to be led by a teacher, who will actively moderate discussions.
      Students will record their observations and reflections on printed
      handouts, as opposed to the remote version, where students respond
      digitally to embedded questions using Nearpod on their laptop.
    </p>
  ),
};
const ICONS = {
  remote: <RemoteIcon />,
  in_person: <SchoolIcon />,
};

const TeachingMethod2 = ({ title, resourceSummary }) => {
  const [expanded, expand] = useState(false);
  const mode = title.toLowerCase().includes("remote") ? "remote" : "in_person";

  return (
    <ExpansionPanel
      className="TeachingMethod ExpansionPanel"
      onChange={() => expand(!expanded)}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <div>
          <h3>
            {ICONS[mode]} {title}
          </h3>
          {COPY[mode]}
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        <div>
          <ResourceSummary2 resources={resourceSummary} />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

TeachingMethod2.propTypes = {
  Title: PropTypes.string,
  ResourceSummary: PropTypes.object,
  ResourceDownloads: PropTypes.array,
};

export default TeachingMethod2;
