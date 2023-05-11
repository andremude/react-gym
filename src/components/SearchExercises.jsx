import React, { useState, useEffect } from 'react'
import '../styles/SearchExercises.css'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalBodyParts from './HorizontalBodyParts'

const SearchExercises = ( {setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <div className='search-exercises-container'>
      <p>Awesome Exercises You <br />
        Should Know</p>
      <div className='search-container'>
        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search Exercises" />
        { <button className='search-btn' onClick={handleSearch}>Search</button> }
      </div>
      <div>
        <div  >
          <HorizontalBodyParts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
      </div>
    </div>
  )
}

export default SearchExercises
