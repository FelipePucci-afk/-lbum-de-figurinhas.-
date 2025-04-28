// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import './App.css'; // Estilos globais ou do App shell

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Pokémon Album</h1>
      {/* O componente Routes define a área onde as rotas serão trocadas */}
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rota Dinâmica para a página de detalhes */}
        {/* ':pokemonName' é um parâmetro dinâmico. Qualquer valor após /pokemon/ */}
        {/* será capturado e disponibilizado via useParams() no PokemonDetailPage */}
        <Route path="/pokemon/:pokemonName" element={<PokemonDetailPage />} />

        {/* Opcional: Rota para lidar com caminhos não encontrados */}
        <Route path="*" element={
          <main style={{ padding: "1rem", textAlign: "center" }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>O caminho que você tentou acessar não existe.</p>
            <Link to="/">Voltar para a Home</Link>
          </main>
        } />
      </Routes>
       {/* Você pode adicionar um Header ou Footer aqui fora do <Routes>
           se quiser que eles apareçam em todas as páginas */}
       {/* <Footer /> */}
    </div>
  );
}

export default App;