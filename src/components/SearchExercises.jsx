import React, { useState } from 'react'
import '../styles/SearchExercises.css'

const SearchExercises = () => {

  const [search, setSearch] = useState('')

  // const handleSearch = async () => {
  //   if(search) {
  //     const exercisesData = await fetchData();
  //   }
  // }

  return (
    <div className='search-exercises-container'>
      <p>Awesome Exercises You <br />
        Should Know</p>
      <div className='search-container'>
        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search Exercises" />
        { <button className='search-btn' /*onClick={handleSearch}*/>Search</button> }
      </div>
    </div>
  )
}

export default SearchExercises
