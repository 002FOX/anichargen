import React from 'react'

function CharacterCard(props) {
  return (
    <div>
    <div style={{display: 'flex',  justifyContent:'center'}}>
      {props.chardata.data.name}       
    </div>
    <div style={{display: 'flex',  justifyContent:'center'}}>
    <img src= {props.chardata.data.images.jpg.image_url} alt="owo" />
    </div>
    </div>
  )
}

export default CharacterCard