import React from "react";
import showdown from "showdown";
import PropTypes from "prop-types";

import "./styles.scss";

const converter = new showdown.Converter();

const RichText = ({ content, className = "" }) => {
  if (!content) return null;

  let __html = converter.makeHtml(content);

  return (
    <div
      className={"RichText " + className}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

RichText.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default RichText;
