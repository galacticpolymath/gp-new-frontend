import React from "react";

const ResourceGroup = ({ itemCat, itemTitle, links = [] }) => {
  return (
    <li>
      <p>
        <strong>{itemTitle}</strong>
      </p>
    </li>
  );
};

export default ResourceGroup;
