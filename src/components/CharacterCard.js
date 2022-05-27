import React from 'react'

function CharacterCard(props) {
  return (
    <section style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
      <h3>{props.chrname}</h3>  
      <img src= {props.chrimg} alt="owo" />  
    </section>
  )
}

export default CharacterCard
   