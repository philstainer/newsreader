export const selectFields = (obj) => {
  const {id, by, url, time, title} = obj || {}

  return {id, by, url, time, title}
}
