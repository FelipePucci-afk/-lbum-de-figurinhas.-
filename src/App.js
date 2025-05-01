// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import './App.css'; // Importa os estilos globais/base

function App() {
  return (
    // A classe 'App' aplica o padding, max-width e centralização definidos no App.css
    <div className="App">
    

      
      <Routes>
      
        <Route path="/" element={<HomePage />} />

        {/* Rota Dinâmica: Renderiza a PokemonDetailPage */}
        {/* O ':pokemonName' na URL será acessado dentro de PokemonDetailPage */}
        <Route path="/pokemon/:pokemonName" element={<PokemonDetailPage />} />

  
        <Route path="*" element={
          <main style={{ padding: "2rem", textAlign: "center" }}>
            <h1 style={{ color: 'var(--pokemon-red)', marginBottom: '1rem' }}>404 - Página Não Encontrada</h1>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Oops! O Pokémon que você procura não foi encontrado nesta rota.</p>
            <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              Voltar para o Álbum
            </Link>
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App;
