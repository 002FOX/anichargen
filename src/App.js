import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [chardata, setcharacter] = useState(null);
  const [active, setactive] = useState(false);

  const generate = async() => {
    const id = Math.floor(Math.random() * 99999)
    const url = `https://api.jikan.moe/v4/characters/${id}`
    console.log(id);
    const character = await axios.get(url);
  
    console.log(character.data);
    setcharacter(character.data);
    setactive(true);
  }

  const onClickHandler= (e) => {
    e.preventDefault();
    generate();
  }

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className= "App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Result:</Card.Title>
          <Card.Text>
          {active ? <CharacterCard chardata= {chardata}/> : <h1></h1>}
          </Card.Text>
          <div style={{display: 'flex',  justifyContent:'center'}}>
          <Button variant="primary" isActive= {active} onClick= {onClickHandler}>Generate</Button> 
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
