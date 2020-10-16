import React from 'react'

function BreadCrumb(props) {
  const {step, description, isActive} = props

    return (
      <div className={isActive ? "bread_crumb_active" : "bread_crumb"}>
        <h3 className="step">{step}</h3>
        <div className="description">{description}</div>
      </div>
    );
}

export default BreadCrumb;

