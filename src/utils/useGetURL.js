export const getUrl = (imUrl) => {
  return new URL(imUrl, import.meta.url).href
} 