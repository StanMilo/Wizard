import React, {useContext} from 'react'
import { StateContext } from '../stateContext'
import BreadCrumb from './BredCrumb';

function BreadCrumbsList(props) {
  const {state} = useContext(StateContext)
  const createCrumbs = (steps, currentStep) => steps.map(
    (step, index) =>  
      <BreadCrumb key={index} 
        description={step} 
        step={index + 1} 
        isActive={index === currentStep} /> 
  );
  
  const {steps, currentStepIndex} = state

    return (
      <div className="bread_crumb_list">
        {createCrumbs(steps, currentStepIndex)}
      </div>
    )

}

export default BreadCrumbsList;

