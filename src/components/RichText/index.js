import React from "react";
import PropTypes from "prop-types";

import CustomMarkdownView from "components/CustomMarkdownView";

import "./styles.scss";

const RichText = ({ content, className = "" }) => {
  if (!content) return null;

  return (
    <CustomMarkdownView
      className={"RichText " + className}
      markdown={content}
      options={{simpleLineBreaks: true, simplifiedAutoLink: true, parseImgDimensions: true, emoji: true}}
    />
  );
};

RichText.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default RichText;
