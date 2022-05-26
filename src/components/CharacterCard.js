import React from 'react'

function CharacterCard(props) {
  return (
    <div style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
      {props.chrname}  
      <img src= {props.chrimg} alt="owo" />  
    </div>
  )
}

export default CharacterCard
   