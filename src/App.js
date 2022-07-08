import { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import Filters from "./components/Filters";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [chardata, setcharacter] = useState([]);
  const [active, setactive] = useState(false);
  const [loading, setloading] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  
    useEffect(() => {
      if (loading) {
        simulateNetworkRequest().then(() => {
          setloading(false);
        });
      }
    }, [loading]);


  const generate = async() => {

    const id = Math.floor(Math.random() * 99999)
    const url = `https://kitsu.io/api/edge/characters/${id}`
    const character = await axios.get(url);

    console.log(character.data.data)

    setcharacter(chardata => [...chardata, character.data.data]);
  }

  const onClickHandler= (e) => {
    setloading(true);
    e.preventDefault();
    for(let i = 0; i < 5; i++)
      generate();
    
    setactive(true);
    setcharacter([])
  }

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection: 'column', margin: 'em'}}>
      <section style={{margin:'2em'}}>
        <Card style={{ width: '75rem' }}>
          <Card.Body>
            <Card.Title>Filters:</Card.Title>
              <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center' }}>
                <Filters />
                <Button disabled={loading} style={{marginTop: '1em'}} variant="primary" onClick= {loading? null : onClickHandler}>{loading? "Loading..." : "Generate"}</Button>
              </div>
          </Card.Body>
        </Card>
      </section>
      <>
        <Card style={{ width: '100rem' }}>
          <Card.Body>
            <Card.Title>Result:</Card.Title>
              <div style={{display: 'flex',  justifyContent:'center', flexDirection: 'row', alignItems: 'center'}}>
              {active ? chardata.map(char => (<CharacterCard  key={char.attributes.name} chrname={char.attributes.name} chrimg={char.attributes.image} />)) 
              : ""}
              </div>
            
          </Card.Body>
        </Card>
      </>
    </div>
  );
}

export default App;
