import React from "react";
import PropTypes from "prop-types";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ICONS from "../../icons";

const ResourceSummary2 = ({ resources = [] }) => {
  if (resources.length === 0) {
    return null;
  }

  const renderRow = ({ itemsGroup = [], itemCat }) => {
    return (
      itemsGroup.length > 0 && (
        <GridContainer>
          <GridItem md={4}>
            {itemsGroup.length} {itemCat}
          </GridItem>
          <GridItem md={8}>{itemsGroup.map(renderItem)}</GridItem>
        </GridContainer>
      )
    );
  };

  const renderItem = ({ item, itemExplanation }, i) => {
    let icon = "";
    for (const slug in ICONS) {
      if (item.match(new RegExp(slug, "gi"))) icon = ICONS[slug];
    }
    return (
      <div key={i} className="resourceSummaryItem">
        {icon} {item} {itemExplanation}
      </div>
    );
  };

  return <div className="ResourceSummary">{resources.map(renderRow)}</div>;
};

ResourceSummary2.propTypes = {
  DigitalItems: PropTypes.array,
  PrintedItems: PropTypes.array,
  OtherRequirements: PropTypes.array,
  Footnote: PropTypes.string,
};

export default ResourceSummary2;
