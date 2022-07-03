import React from 'react'

function CharacterCard(props) {
  return (
    <section style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems: 'center', marginLeft: "20px" }}>
      <h3>{props.chrname}</h3>  
      {props.chrimg ? <img src= {props.chrimg.original} alt="owo" /> :  <img src= "No Image" alt="owo" />}
    </section>
  )
}

export default CharacterCard
   