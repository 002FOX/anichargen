import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Button from "./components/Button";
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
    <div className="App">
      <Button isActive={active} clicked={onClickHandler}/>
      {active ? <CharacterCard chardata={chardata}/> : <h1></h1>}   
    </div>
  );
}

export default App;
