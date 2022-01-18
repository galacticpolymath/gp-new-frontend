import React from 'react'
import MarkdownView from "react-showdown";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const components = {
  AnchorLink (props) {
    return <AnchorLink offset="125px" {...props} />
  }
}

const CustomMarkdownView = ({
  markdown
}) => {
  return <MarkdownView markdown={markdown} components={{...components}} />
}

export default CustomMarkdownView