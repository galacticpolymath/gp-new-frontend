import React from "react";
import PropTypes from "prop-types";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { getIcon } from "../../icons";

const ResourceSummary2 = ({ resources = [] }) => {
  if (resources.length === 0) {
    return null;
  }

  const renderRow = ({ itemsGroup = [], itemCat, nItems }, i) => {
    return (
      itemsGroup.length > 0 && (
        <GridContainer key={i}>
          <GridItem md={4}>
            {nItems} {itemCat}
          </GridItem>
          <GridItem md={8}>{itemsGroup.map(renderItem)}</GridItem>
        </GridContainer>
      )
    );
  };

  const renderItem = ({ item, itemExplanation }, i) => {
    return (
      <div key={i} className="resourceSummaryItem">
        {getIcon(item)} {item}{" "}
        {typeof itemExplanation === "string" && itemExplanation}
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
