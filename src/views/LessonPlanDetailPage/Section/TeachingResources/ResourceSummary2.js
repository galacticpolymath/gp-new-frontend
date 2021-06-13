import React from "react";
import PropTypes from "prop-types";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RichText from "../../../../components/RichText";
import ICONS from "../../icons";

const ResourceSummary2 = ({
  DigitalItems = [],
  PrintedItems = [],
  OtherRequirements = [],
  Footnote,
  ...props
}) => {
  console.log(props);
  if (
    DigitalItems.length + PrintedItems.length + OtherRequirements.length ===
    0
  )
    return null;

  const renderRow = (resourceList = [], resourceType, icon) => {
    return (
      resourceList.length > 0 && (
        <GridContainer>
          <GridItem md={4}>
            {resourceList.length} {resourceType}
            {(resourceList.length > 1 || resourceList.length === 0) && "s"}
          </GridItem>
          <GridItem md={8}>
            {resourceList.map(({ Value }, i) => renderItem(Value, icon, i))}
          </GridItem>
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

ResourceSummary2.propTypes = {
  DigitalItems: PropTypes.array,
  PrintedItems: PropTypes.array,
  OtherRequirements: PropTypes.array,
  Footnote: PropTypes.string,
};

export default ResourceSummary2;
