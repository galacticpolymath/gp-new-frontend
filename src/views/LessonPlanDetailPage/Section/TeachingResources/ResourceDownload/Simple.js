import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

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
      <Box display="flex" key={i}>
        {Name && <div>{Name}:</div>}
        {Downloads.map(renderDownload)}
      </Box>
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
      <Box display="flex" key={i}>
        {icon}{" "}
        <a href={Link} target="_blank" rel="noopener noreferrer">
          {Label}
        </a>
      </Box>
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
  Description: PropTypes.string,
  DownloadGroups: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      Downloads: PropTypes.array,
    })
  ),
};

export default SimpleResourceDownload;
