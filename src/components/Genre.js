import React from 'react';

function Genre(props) {
  const {id, name, isActive, onClick} = props

    return (
      <div className={isActive ? "genre_active" : "genre"} onClick={() => onClick(id)}>
        {name}
      </div>
    )
}

export default Genre;

