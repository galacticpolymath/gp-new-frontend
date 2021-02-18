import React from "react";
import PropTypes from "prop-types";

import Tag from "../Tag";

const TagCloud = ({ tags = [] }) => (
  <div className="TagCloud">
    {tags.map((t, i) => (
      <Tag key={i} {...t} />
    ))}
  </div>
);

TagCloud.propTypes = {
  tags: PropTypes.array,
};

export default TagCloud;
