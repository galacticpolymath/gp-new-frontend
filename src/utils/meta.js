import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Render a Helmet with meta tags.
 * @param {Object} data
 * @param {string} [data.title] - Meta title text
 * @param {string} data.description - Meta description text
 * @param {string} [data.image] - Meta image URL
 * @param {string} [data.url] - Meta canonical URL
 * @param {string} [data.type] - Meta page type
 */
export const renderMetaTags = ({
  title = '',
  description,
  image = 'https://res.cloudinary.com/galactic-polymath/image/upload/v1593304395/logos/GP_full_stacked_grad_whiteBG_llfyal.png',
  url = 'https://www.galacticpolymath.com',
  type = 'article',
}) => {
  const fullTitle = title === '' ? 'Galactic Polymath' : 'Galactic Polymath | '+title
  return <Helmet>
    <title>{fullTitle}</title>
    <meta name="og:title" property="og:title" content={fullTitle} />

    <meta name="og:description" property="og:description" content={description} />
    <meta name="description" property="description" content={description} />

    <meta name="og:image" property="og:image" content={image} />
    <meta name="og:url" property="og:url" content={url} />
    <meta name="og:type" property="og:type" content={type} />
  </Helmet>
}