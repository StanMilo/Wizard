import React, {useContext, useEffect, useState} from 'react'
import { StateContext } from '../stateContext'
import Subgenre from './Subgenre';
import StepActions from './StepActions';

function SubgenresList(props) {
  const {state, dispatch} = useContext(StateContext)
  const {genres, selectedGenreID, selectedSubgenre} = state
  const selectedId = selectedSubgenre ? selectedSubgenre.id : null
  const handleGenreClick = (subgenre) => dispatch({type: "subgenre-selected", value: subgenre})

  const createGenres = (genres, genreID, subgenreId) => {
    const {subgenres} = genres.find(genre => genre.id === genreID)

    return subgenres.map((genre, index) =>  
      <Subgenre key={index} 
        id={genre.id} 
        name={genre.name} 
        isActive={genre.id === subgenreId} 
        onClick={handleGenreClick}
        needDescription={genre.isDescriptionRequired}
         /> 
    );
  }

    return (<>
      <div className="genres_list">
        {createGenres(genres, selectedGenreID, selectedId)}
        <Subgenre key="1337" id={1337} name="Add New" isActive={1337 === selectedId} onClick={handleGenreClick} /> 
      </div>
        <StepActions isNextEnabled={selectedId ? true : false} />
        </>
    )

}

export default SubgenresList;