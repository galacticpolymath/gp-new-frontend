import React from 'react'
import { Box, makeStyles } from "@material-ui/core";
import classNames from 'classnames';

import ExternalLink from 'components/ExternalLink'

import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle';
const useStyles = makeStyles(blogPostsPageStyle);

const getMedia = ({type, mainLink}) => {
  if (type === "video") {
    return <iframe
      width="560"
      height="315"
      src={mainLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  } else if (type === 'pdf') {
    return <iframe
      src={mainLink}
      width="640"
      height="480"
      allow="autoplay"
    ></iframe>
  }
}

const Slide = ({
  type,
  title,
  lessonRelevance,
  by,
  byLink,
  mainLink,
}) => {
  const classes = useStyles();

  return <Box boxShadow={4} className={classNames("Slide", type, classes.card)}>
    {getMedia({ type, mainLink })}
    <div className="caption">
      <h5>{title}</h5>
      <p>{lessonRelevance}</p>
      <p>by <ExternalLink href={byLink}>{by}</ExternalLink></p>
    </div>
  </Box>
}

export default Slide