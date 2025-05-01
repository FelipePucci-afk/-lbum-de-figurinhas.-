
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../services/pokeapi';
import './HomePage.css'; 

const HomePage = () => {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true); 
        setError(null);   
        const data = await getPokemonList(151); 
        setPokemonList(data); 
      } catch (err) {
        
        setError('Falha ao carregar os Pokémon. Verifique sua conexão ou tente novamente.');
        console.error("Erro detalhado:", err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPokemon(); 

  
  if (loading) {
    return <div className="loading">Capturando Pokémon... Por favor, aguarde!</div>;
  }


  if (error) {
    return <div className="error">{error}</div>;
  }

  
  return (
    <div className="home-page">
      <h1>MEU ÁLBUM DE POKÉMON</h1>
      <div className="pokemon-grid">
     
        {pokemonList.map((pokemon) => {
          
          const pokemonId = pokemon.url.split('/')[6];
         
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

          return (
            
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="pokemon-card-link">
              <div className="pokemon-card">
               
                <div className="pokemon-image-container">
                  <img
                    src={imageUrl}
                    alt={`Imagem de ${pokemon.name}`}
                    className="pokemon-image"
                    
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="pokemon-info">
                  <span className="pokemon-name">{pokemon.name}</span>
                  <span className="pokemon-id">#{pokemonId.toString().padStart(3, '0')}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
