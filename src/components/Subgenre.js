import React from 'react';

function Subgenre(props) {
  const {id, name, isActive, onClick, needDescription} = props

    return (
      <div className={isActive ? "genre_active" : "genre"} onClick={() => onClick({id, name, isDescriptionRequired: needDescription})}>
        {name}
      </div>
    )
}

export default Subgenre;
