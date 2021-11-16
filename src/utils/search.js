// Method for assessing whether a value is an object:
// https://stackoverflow.com/a/11183002
const objConstructor = ({}).constructor
const arrayConstructor = [].constructor

/**
 * Whether x is an Object or an Array.
 */
const isIterable = x => {
  return (x.constructor === objConstructor || x.constructor === arrayConstructor)
}

/**
 * Returns an Array that represents all the searchable values in an object.
 * - If x is an Array, return x.
 * - If x is an Object, return all object values.
 * - If x cannot be iterated through, return an Array with only x in it.
 * - If x cannot be searched, return an empty Array.
 */
const iterate = x => {
  if (!isSearchable(x)) {
    return []
  }
  
  if (x.constructor === objConstructor) {
    return Object.values(x)
  } else if (x.constructor === arrayConstructor) {
    return x
  } else {
    return [x]
  }
}
export const isSearchable = x => {
  return (
    x != null &&
    x !== '' &&
    typeof x !== 'boolean' &&
    typeof x !== 'function'
  )
}

/**
 * Recursively searches a JSON object's values, ignoring keys.
 */
export const containsSearchTerm = (needle, haystack) => {
  if (!isSearchable(haystack)) return false
  
  let haybales = iterate(haystack)

  for (let i = 0; i < haybales.length; i++) {
    let haybale = haybales[i]
    // if it's not an object
    if (isSearchable(haybale) && isIterable(haybale)) {
      if (containsSearchTerm(needle, haybale)) {
        return true
      }
    } else if (isSearchable(haybale)) {
      if (nonIterableContainsSearchTerm(needle, haybale)) {
        return true
      }
    }
  }
  return false
}

/**
 * Searches a non-iterable entity (string, boolean, number, etc.) for a string.
 */
export const nonIterableContainsSearchTerm = (needle, haystack) => {
  if (!needle) return false
  
  if (
    isSearchable(haystack) &&
    haystack.toLowerCase().includes(needle.toLowerCase())
  ) {
    return true
  }
  return false
}