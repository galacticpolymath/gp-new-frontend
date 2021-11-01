import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Render a Helmet with meta tags.
 * @param {string} title - Meta title text
 * @param {string} description - Meta description text
 * @param {string} image - Meta image URL
 */
export const renderMetaTags = (title = '', description, image) => {
  const fullTitle = title === '' ? 'Galactic Polymath' : 'Galactic Polymath | '+title
  return <Helmet>
    <title>{fullTitle}</title>
    <meta property="og:title" content={fullTitle} />

    <meta property="og:description" content={description} />
    <meta name="description" content={description} />

    <meta name="og:image" content={image} />
  </Helmet>
}