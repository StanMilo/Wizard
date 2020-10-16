import React, {useContext, useState} from 'react'
import { StateContext } from '../stateContext'

function AddSubgenre(props) {
    const {dispatch} = useContext(StateContext)
    const [subgenre, setSubgenre] = useState({id: Date.now()})

    const nextStep = () => dispatch({type: "final-step"})
    const previousStep = () => dispatch({type: "previous-step"})
    const addSubgenre = (subgenre) => dispatch({type: "new-subgenre", value: subgenre})

    const handleName = (e) => {
     setSubgenre({...subgenre, name : e.target.value})
    }

    const handleCheck = (e) => {
      setSubgenre({...subgenre, isDescriptionRequired : e.target.value})
    }

    const handleNext = (subgenre) => {
      nextStep()
      addSubgenre(subgenre)
    }

    return (  
      <>
      <div>
          <input type="text" placeholder="Subgenre name" onChange={handleName} />
          <input type="checkbox" placeholder="Description is required for this subgenre" onChange={handleCheck} />Description is required for this subgenre
        </div>
        <div className="actions">
          <button className="button" onClick={previousStep}>Back</button>
          <button className="button" onClick={()=> handleNext(subgenre)}>Next</button>
      </div>
  </>
    )

}

export default AddSubgenre;

