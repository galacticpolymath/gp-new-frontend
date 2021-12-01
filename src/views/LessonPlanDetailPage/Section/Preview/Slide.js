import React from 'react'
import ExternalLink from 'components/ExternalLink'

const Slide = ({
  type,
  title,
  description,
  lessonRelevance,
  by,
  byLink,
  keywords,
  mainLink,
  vimeoLink,
  filename,
  otherLink,
}) => {
  let media
  if (type === "video") {
    media = <iframe
      width="560"
      height="315"
      src={mainLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  }

  return <div className={"Slide "+type}>
    {media}
    <div className="caption">
      <h5>{title}</h5>
      <p>{lessonRelevance}</p>
      <p>by <ExternalLink href={byLink}>{by}</ExternalLink></p>
    </div>
  </div>
}

export default Slide