import React from 'react'

function Button(props) {
  return ( 
    <button onClick={props.clicked}> Generate </button>
  )
}

export default Button