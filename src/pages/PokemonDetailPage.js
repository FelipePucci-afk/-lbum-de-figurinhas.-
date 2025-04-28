// src/pages/PokemonDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokeapi';
import './PokemonDetailPage.css'; // Arquivo de estilos novo ou atualizado

const PokemonDetailPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPokemonDetails(pokemonName);
        setPokemon(data);
      } catch (err) {
        setError('Erro ao carregar detalhes do Pokémon.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  if (loading) {
    return <div className="loading">Carregando detalhes...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Voltar para a lista</Link>
      <div className="pokemon-detail-card">
        <img 
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="pokemon-detail-image"
        />
        <h1 className="pokemon-detail-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
          <span className="pokemon-detail-id">#{pokemon.id.toString().padStart(3, '0')}</span>
        </h1>

        <div className="pokemon-info-section">
          <h2>Informações</h2>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

          <h2>Tipos</h2>
          <div className="types-container">
            {pokemon.types.map((typeObj) => (
              <span key={typeObj.type.name} className={`type-badge ${typeObj.type.name}`}>
                {typeObj.type.name.toUpperCase()}
              </span>
            ))}
          </div>

          <h2>Habilidades</h2>
          <ul>
            {pokemon.abilities.map((abilityObj) => (
              <li key={abilityObj.ability.name}>
                {abilityObj.ability.name.replace('-', ' ')}
                {abilityObj.is_hidden && ' (Hidden)'}
              </li>
            ))}
          </ul>

          <h2>Stats Base</h2>
          <ul>
            {pokemon.stats.map((statObj) => (
              <li key={statObj.stat.name}>
                <strong>{statObj.stat.name.replace('-', ' ')}:</strong> {statObj.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
