import { useEffect, useState } from 'react'

const Search = ({ onSearchSubmit, clearResults }) => {
  const [term, setTerm] = useState('')
  useEffect(() => {
    if (term !== '') {
      onSearchSubmit(term)
    } else {
      clearResults(term)
    }
  }, [term, onSearchSubmit, clearResults])
  return (
    <>
      <input
        type="search"
        className="input-search"
        onChange={e => setTerm(e.target.value)}
        value={term}
        placeholder="Search by collection, movie"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </>
  )
}

export default Search
