import React from 'react'

function HeaderComponent(props) {
    return (
        <header className="header">{props.children}</header>
    )
  }

export default HeaderComponent;

