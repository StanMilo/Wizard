import React, {useContext} from 'react'
import {StateContext} from '../stateContext'

function StepActions(props) {
    const {state, dispatch} = useContext(StateContext)
    const {currentStepIndex, steps} = state

    const nextStep = () => dispatch({type: "next-step"})
    const previousStep = () => dispatch({type: "previous-step"})

    return (
        <div className="actions">
            <button className="button" onClick={previousStep}>Back</button>
            {currentStepIndex === steps.length - 1 ? <button className="button" disabled={!props.isNextEnabled} onClick={nextStep}>Add</button> : <button className="button" disabled={!props.isNextEnabled} onClick={nextStep}>Next</button>}
        </div>
    );
}

export default StepActions;