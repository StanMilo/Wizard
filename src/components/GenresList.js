import React, {useContext} from 'react'
import { StateContext } from '../stateContext'
import Genre from './Genre';
import StepActions from './StepActions';

function GenresList(props) {
  const {state, dispatch} = useContext(StateContext)
  const {genres, selectedGenreID} = state

  const handleGenreClick = (id) => dispatch({type: "genre-selected", value: id})

  const createGenres = (genres, selectedID) => genres.map(
    (genre, index) =>  
      <Genre key={index} 
        id={genre.id} 
        name={genre.name} 
        isActive={genre.id === selectedID} 
        onClick={handleGenreClick} /> 
  );

    return (
      <>
        <div className="genres_list">
          {createGenres(genres, selectedGenreID)}
        </div>
        <StepActions isNextEnabled={selectedGenreID ? true : false} />
      </>
    )

}

export default GenresList;