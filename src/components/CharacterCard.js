import React from 'react'
import Card from 'react-bootstrap/Card';

function CharacterCard(props) {
  return (
    <section style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems: 'center', marginLeft: "20px" }}>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>{props.chrname}</Card.Title>
        </Card.Body>
        {props.chrimg ? <Card.Img style={{height: '340px', width:'220px'}} variant="top" src={props.chrimg.original} /> : <img height={340} width={220} src= "No Image" alt="owo" />}
      </Card>
    </section>
  )
}

export default CharacterCard
   