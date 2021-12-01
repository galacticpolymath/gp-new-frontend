export const getVideoThumb = link => {
  if (!link) return ''

  if (link.includes('youtube')) {
    const slug = link.split('/embed/')[1]
    return `http://i3.ytimg.com/vi/${slug}/hqdefault.jpg`
  }
  return ''
}