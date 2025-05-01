// src/pages/PokemonDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokeapi';
import './PokemonDetailPage.css'; // Importa os estilos específicos da PokemonDetailPage

const PokemonDetailPage = () => {
  // Obtém o parâmetro 'pokemonName' da URL usando o hook useParams
  const { pokemonName } = useParams();
  // Estados para guardar os detalhes do Pokémon, status de carregamento e erros
  const [pokemon, setPokemon] = useState(null); // Inicia como null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para buscar os detalhes quando o nome do Pokémon (da URL) mudar
  useEffect(() => {
    const fetchDetails = async () => {
      // Validação simples para evitar chamadas desnecessárias
      if (!pokemonName) return;

      try {
        setLoading(true);
        setError(null);
        setPokemon(null); // Limpa dados antigos enquanto carrega novos
        const data = await getPokemonDetails(pokemonName.toLowerCase()); // Garante nome minúsculo para a API
        setPokemon(data); // Atualiza o estado com os detalhes
      } catch (err) {
        setError(`Não foi possível encontrar detalhes para "${pokemonName}". O Pokémon existe ou a API está disponível?`);
        console.error("Erro detalhado:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [pokemonName]); // Dependência: Roda o efeito sempre que pokemonName mudar

  // Renderização condicional: Carregamento
  if (loading) {
    return <div className="loading">Analisando Pokédex...</div>;
  }

  // Renderização condicional: Erro
  if (error) {
    return (
       <div style={{ textAlign: 'center', padding: '2rem' }}>
         <p className="error">{error}</p>
         <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Tentar voltar para o Álbum
         </Link>
       </div>
     );
  }

  // Renderização condicional: Pokémon não encontrado (caso a API retorne sucesso mas sem dados)
  // Ou antes do primeiro carregamento ser concluído com sucesso.
  if (!pokemon) {
     return <div className="loading">Nenhum dado de Pokémon para exibir.</div>; // Ou outra mensagem apropriada
  }

  // Função auxiliar para capitalizar strings (pode ser movida para um arquivo utils)
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Renderização principal: Detalhes do Pokémon
  return (
    <div className="detail-page">
      {/* Link para voltar à página inicial */}
      <Link to="/" className="back-link">
         <span style={{ marginRight: '8px' }}>←</span> Voltar para o Álbum
      </Link>

      {/* Card principal contendo todas as informações */}
      <div className="pokemon-detail-card">

        {/* Coluna Esquerda: Imagem */}
        <div className="pokemon-image-section">
          <img
            // Tenta pegar artwork oficial, senão dream_world, senão sprite padrão
            src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.other?.dream_world?.front_default || pokemon.sprites.front_default}
            alt={`Imagem de ${capitalize(pokemon.name)}`}
            className="pokemon-detail-image"
             onError={(e) => { e.target.src = pokemon.sprites.front_default; /* Fallback para sprite simples */ }}
          />
        </div>

        {/* Coluna Direita: Informações */}
        <div className="pokemon-info-section">
          {/* Cabeçalho com Nome e ID */}
          <div className="pokemon-header-detail">
            <h1 className="pokemon-detail-name">
              {capitalize(pokemon.name)}
              <span className="pokemon-detail-id">
                #{pokemon.id.toString().padStart(3, '0')}
              </span>
            </h1>
          </div>

          {/* Seção: Informações Básicas */}
          <h2>Informações Básicas</h2>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

          {/* Seção: Tipos */}
          <h2>Tipos</h2>
          <div className="types-container">
            {pokemon.types.map((typeInfo) => (
              <span key={typeInfo.slot} className={`type-badge ${typeInfo.type.name}`}>
                {typeInfo.type.name}
              </span>
            ))}
          </div>

          {/* Seção: Habilidades */}
          <h2>Habilidades</h2>
          <ul>
            {pokemon.abilities.map((abilityInfo) => (
              <li key={abilityInfo.ability.name}>
                {capitalize(abilityInfo.ability.name.replace('-', ' '))}
                {abilityInfo.is_hidden && <span style={{ fontStyle: 'italic', color: 'var(--text-light)', marginLeft: '5px' }}>(Hidden)</span>}
              </li>
            ))}
          </ul>

          {/* Seção: Stats Base */}
          <h2>Stats Base</h2>
          <ul>
            {pokemon.stats.map((statInfo) => (
              <li key={statInfo.stat.name}>
                <strong>{capitalize(statInfo.stat.name.replace('-', ' '))}:</strong> {statInfo.base_stat}
                 {/* Opcional: Barra de progresso simples para stats */}
                 <div style={{ backgroundColor: '#eee', borderRadius: '5px', height: '8px', width: '100%', maxWidth: '200px', marginTop: '2px' }}>
                    <div style={{ backgroundColor: 'var(--pokemon-yellow)', height: '100%', borderRadius: '5px', width: `${Math.min(statInfo.base_stat, 150)/1.5}%` }}></div> {/* Limita visualmente */}
                 </div>
              </li>
            ))}
          </ul>
        </div> {/* Fim de pokemon-info-section */}

      </div> {/* Fim de pokemon-detail-card */}
    </div> /* Fim de detail-page */
  );
};

export default PokemonDetailPage;
