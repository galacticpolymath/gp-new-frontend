import React from "react";
import showdown from "showdown";
import PropTypes from "prop-types";

import "./styles.scss";

const URL = "https://lessondirectory-api.herokuapp.com";

const converter = new showdown.Converter();

const RichText = ({ content, className = "" }) => {
  if (!content) return null;

  let __html = converter.makeHtml(content);
  __html = __html
    .replace('src="/', 'src="' + URL + "/")
    .replace("<a ", '<a target="_blank" rel="noopener noreferrer" ');

  return (
    <div
      className={"RichText " + className}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

export default RichText;
