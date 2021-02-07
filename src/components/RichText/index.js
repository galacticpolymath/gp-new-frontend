import React from "react";
import showdown from "showdown";
import PropTypes from "prop-types";

const { REACT_APP_API_URL } = process.env;

const converter = new showdown.Converter();

const RichText = ({ content, className = "" }) => {
  if (!content) return null;

  let __html = converter.makeHtml(content);
  __html = __html.replace('src="/', 'src="' + REACT_APP_API_URL + "/");

  return <div className={className} dangerouslySetInnerHTML={{ __html }} />;
};

RichText.propTypes = {
  content: PropTypes.object,
  className: PropTypes.string,
};

export default RichText;
