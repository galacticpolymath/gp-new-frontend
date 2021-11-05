export const containsSearchTerm = (searchTerm, json) => {
  return JSON.stringify(json).toLowerCase().includes(searchTerm.toLowerCase())
}