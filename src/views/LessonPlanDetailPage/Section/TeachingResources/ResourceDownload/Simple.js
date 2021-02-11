import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer";
import RichText from "../../../../../components/RichText";
import ICONS from "../../../icons";

const SimpleResourceDownload = ({
  Title,
  Description,
  DownloadGroups = [],
}) => {
  // eslint-disable-next-line
  const renderDownloadGroup = ({ Name, Downloads = [] }, i) => {
    if (Downloads.length === 0 && !Name) return null;

    return (
      <GridContainer key={i}>
        {Name && <Grid>{Name}:</Grid>}
        {Downloads.map(renderDownload)}
      </GridContainer>
    );
  };

  // eslint-disable-next-line
  const renderDownload = ({ Label, Link }, i) => {
    let icon = "📄";

    for (const slug in ICONS) {
      // eslint-disable-next-line
      if (Label.match(new RegExp(slug, "gi"))) icon = ICONS[slug];
    }

    return (
      <Grid key={i}>
        {icon}{" "}
        <a href={Link} target="_blank" rel="noopener noreferrer">
          {Label}
        </a>
      </Grid>
    );
  };

  return (
    <div className="SimpleResourceDownload">
      <RichText content={"**" + Title + ":** " + Description} />
      {DownloadGroups.map(renderDownloadGroup)}
    </div>
  );
};

SimpleResourceDownload.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.object,
  DownloadGroups: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      Downloads: PropTypes.array,
    })
  ),
};

export default SimpleResourceDownload;
