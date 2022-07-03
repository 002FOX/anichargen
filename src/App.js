import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [chardata, setcharacter] = useState([]);
  const [active, setactive] = useState(false);

  const generate = async() => {
    
    const id = Math.floor(Math.random() * 99999)
    console.log(id)
    const url = `https://kitsu.io/api/edge/characters/${id}`
    const character = await axios.get(url);
  
    console.log(character.data.data);
    setcharacter(chardata => [...chardata, character.data.data]);
    setactive(true);
  }

  const onClickHandler= (e) => {
    e.preventDefault();
    for(let i = 0; i < 5; i++)
      generate();
    setcharacter([])
  }

  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}} className= "App">
      <Card style={{ width: '75rem' }}>
        <Card.Body>
          <Card.Title>Generate:</Card.Title>
          <section style={{display: 'flex',  justifyContent:'center'}}>
          <Button variant="primary" onClick= {onClickHandler}>GO</Button>
          </section>
        </Card.Body>
      </Card>
      </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}} className= "App">
      <Card style={{ width: '100rem' }}>
        <Card.Body>
          <Card.Title>Result:</Card.Title>
          <div style={{display: 'flex',  justifyContent:'center', flexDirection: 'row', alignItems: 'center'}}>
          { active ? 
          chardata.map(char => (<CharacterCard  key={char.attributes.name} chrname={char.attributes.name} chrimg={char.attributes.image} />)) 
          : ""}
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default App;
