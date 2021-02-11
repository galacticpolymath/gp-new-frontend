import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer";
import RichText from "../../../../components/RichText";
import ICONS from "../../icons";

const ResourceSummary = ({
  DigitalItems = [],
  PrintedItems = [],
  OtherRequirements = [],
  Footnote,
}) => {
  if (
    DigitalItems.length + PrintedItems.length + OtherRequirements.length ===
    0
  )
    return null;

  const renderRow = (resourceList = [], resourceType, icon) => {
    return (
      resourceList.length > 0 && (
        <GridContainer>
          <Grid md={4}>
            {resourceList.length} {resourceType}
            {(resourceList.length > 1 || resourceList.length === 0) && "s"}
          </Grid>
          <Grid md={8}>
            {resourceList.map(({ Value }, i) => renderItem(Value, icon, i))}
          </Grid>
        </GridContainer>
      )
    );
  };

  const renderItem = (itemName, icon, i) => {
    for (const slug in ICONS) {
      if (itemName.match(new RegExp(slug, "gi"))) icon = ICONS[slug];
    }
    return (
      <div key={i}>
        {icon} {itemName}
      </div>
    );
  };

  return (
    <div className="ResourceSummary">
      {renderRow(DigitalItems, "Digital item", "📩")}
      {renderRow(PrintedItems, "Printed item", "📄")}
      {renderRow(OtherRequirements, "Other requirement", "💻")}
      <RichText content={Footnote} />
    </div>
  );
};

ResourceSummary.propTypes = {
  DigitalItems: PropTypes.array,
  PrintedItems: PropTypes.array,
  OtherRequirements: PropTypes.array,
  Footnote: PropTypes.object,
};

export default ResourceSummary;
