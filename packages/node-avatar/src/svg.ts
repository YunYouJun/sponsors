/**
 * get text avatar
 */
export function generateTextAvatar(name: string) {
  function getFontSize(name: string) {
    const len = name.length
    if (len <= 3)
      return 56
    if (len <= 6)
      return 46
    if (len <= 8)
      return 36
    return 30
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="100" fill="#e4e8ef"/>
  <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="white" font-size="${getFontSize(name)}px" font-family="Arial, sans-serif">${name}</text>
</svg>  
`
}

/**
 * get url
 */
export function generateTextAvatarUrl(name: string) {
  return `data:image/svg+xml,${encodeURIComponent(generateTextAvatar(name))}`
}
