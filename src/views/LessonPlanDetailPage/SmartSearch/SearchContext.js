import React, { createContext, useEffect, useState } from 'react'

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm() {},
  isSearchVisible: false,
  setIsSearchVisible() {}
})

export const SearchProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  useEffect(() => {
    setIsSearchVisible(false)
  }, [searchTerm])

  return (
    <SearchContext.Provider
      value={{
        searchTerm, 
        setSearchTerm, 
        isSearchVisible, 
        setIsSearchVisible
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext