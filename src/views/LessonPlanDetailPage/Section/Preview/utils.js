import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import NextIcon from '@material-ui/icons/ArrowRight';
import PrevIcon from '@material-ui/icons/ArrowLeft';
import PdfIcon from "assets/img/pdf.svg";

const getVideoThumb = link => {
  if (!link) return ''

  if (link.includes('youtube')) {
    const slug = link.split('/embed/')[1]
    return `https://i3.ytimg.com/vi/${slug}/hqdefault.jpg`
  }
  return ''
}

const renderThumbs = items => {
  return items.map(({props: { mainLink, type, title }}, i) => {
    if (type === 'video') {
      return <img key={i} src={getVideoThumb(mainLink)} alt={title} />
    } else if (type === 'pdf') {
      return <img key={i} className="pdf" src={PdfIcon} alt="PDF" />
    }
  })
}

const renderArrowPrev = (clickHandler, hasPrev, label) =>
  <IconButton
    key="previous"
    aria-label={label}
    color="primary"
    onClick={clickHandler}
    disabled={!hasPrev}
  >
    <PrevIcon/>
  </IconButton>

const renderArrowNext = (clickHandler, hasNext, label) =>
  <IconButton
    key="next"
    aria-label={label}
    color="primary"
    onClick={clickHandler}
    disabled={!hasNext}
  >
    <NextIcon/>
  </IconButton>

export const customControls = {
  renderThumbs,
  renderArrowPrev,
  renderArrowNext
}