import React from 'react'

function CharacterCard(props) {
  return (
    <section style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
      {props.chrname}  
      <img src= {props.chrimg} alt="owo" />  
    </section>
  )
}

export default CharacterCard
   