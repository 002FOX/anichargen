import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { fireEvent } from "@testing-library/react";

function App() {

  const [chardata, setcharacter] = useState([]);
  const [active, setactive] = useState(false);

  const generate = async() => {
    
    const id = Math.floor(Math.random() * 99999)
    console.log(id)
    const url = `https://api.jikan.moe/v4/characters/${id}`
    const character = await axios.get(url);
  
    console.log(character.data);
    setcharacter(chardata => [...chardata, character.data]);
    setactive(true);
  }

  const onClickHandler= (e) => {
    e.preventDefault();
    for(let i = 0; i < 5; i++)
      generate();
    setcharacter([])
  }

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className= "App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Result:</Card.Title>
          <Card.Text>
          { active ? chardata.map(char => (<CharacterCard chrname={char.data.name} chrimg={char.data.images.jpg.image_url} />)) : ""}
          </Card.Text>
          <div style={{display: 'flex',  justifyContent:'center'}}>
          <Button variant="primary" onClick= {onClickHandler}>Generate</Button> 
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
