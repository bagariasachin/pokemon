import React,{useState} from 'react'
import './App.css';
import Axios from 'axios';
import img1 from './images/pokemon.jpg'


function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen , setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
        
  });

  const searchPokemon = () =>{

    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name:pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,

        });
        setPokemonChosen(true);
        
      }
    );

  };
 
  return (
    
    <div className="App">
    <div className='titlescreen'>
     <a href="/"><h1>Pokemon Card </h1></a>  
     <input type='text'
     onChange={(event)=>{
     setPokemonName(event.target.value);
     
     }}/>
     <button onClick={searchPokemon} >Search</button>
     
    </div>
    <div className="displaySection">
    {!pokemonChosen ? (<h1>Please choose a pokemon</h1>
    ):(<>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.img} />
    <h3>Species :  {pokemon.species}</h3>
    <h3>Type :  {pokemon.type}</h3>
    <h3>HP :  {pokemon.hp}</h3>
    <h3>Attack :  {pokemon.attack}</h3>
    <h3>Defense :  {pokemon.defense}</h3>
    </>
    )
    }

    </div>
   
   
    </div>
    
  );
}

export default App;
