// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../services/pokeapi';
import './HomePage.css'; // Estilos do álbum

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPokemonList(151); // 151 primeiros Pokémon
        setPokemonList(data);
      } catch (err) {
        setError('Falha ao carregar os Pokémon. Tente recarregar a página.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <div className="loading">Carregando Pokémon...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>MEU ÁLBUM DE POKÉMON</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => {
          const pokemonId = pokemon.url.split('/')[6]; // Pega o ID na URL
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

          return (
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name} className="pokemon-card-link">
              <div className="pokemon-card">
                <img src={imageUrl} alt={pokemon.name} className="pokemon-image" />
                <div className="pokemon-info">
                  <span className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                  <span className="pokemon-id">#{pokemonId}</span>
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
