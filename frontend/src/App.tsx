import { useEffect, useState } from 'react';
import './App.css'
import SubjectCard from './components/SubjectCard'
import { pokeAPI } from './services/pokeapi';
import { NameCard } from './components/NameCard';
import LoginForm from './components/LoginForm';

function  App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    pokeAPI.get('/pokemon/charmander',{})
      .then(response => {
        debugger
        setPokemon(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App