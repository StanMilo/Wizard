import React from 'react'
import HeaderComponent from './HeaderComponent';

function ScreenComponent(props) {
  const {heading, children} = props

  return (
    <div className="wrapper_main">
      <div className="screen_main">
        {heading && <HeaderComponent>{heading}</HeaderComponent> }
        {children}
      </div>
    </div>
  )
}

export default ScreenComponent;


