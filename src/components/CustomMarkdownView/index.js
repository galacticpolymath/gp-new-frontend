import React from 'react'
import MarkdownView from "react-showdown";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ExternalLink from 'components/ExternalLink';

const components = {
  AnchorLink (props) {
    return <AnchorLink offset="125px" {...props} />
  },
  a (props) {
    let Link = 'a'

    // if the link DOES NOT go to galacticpolymath.com/* (excluding subdomains)
    if (!/^(https?:)?(\/\/)?(www\.)?galacticpolymath\.com/.test(props.href)) {
      Link = ExternalLink
    }

    return <Link {...props} />
  }
}

const CustomMarkdownView = ({
  markdown,
  ...passThruProps
}) => {
  return <MarkdownView
    {...passThruProps}
    markdown={markdown}
    components={{...components}}
  />
}

export default CustomMarkdownView