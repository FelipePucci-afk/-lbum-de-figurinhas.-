// src/services/pokeapi.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Função para buscar a lista de Pokémon (ex: primeiros 151)
export const getPokemonList = async (limit = 151, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`, {
      params: {
        limit: limit,
        offset: offset,
      },
    });
    // A resposta inicial contém apenas nome e URL. Precisamos buscar detalhes de cada um
    // ou podemos usar a URL fornecida para a página de detalhes.
    // Para simplificar a lista inicial, vamos retornar apenas os nomes e URLs.
    return response.data.results; // Array de { name: string, url: string }
  } catch (error) {
    console.error("Erro ao buscar lista de Pokémon:", error);
    throw error; // Re-lança o erro para ser tratado no componente
  }
};

// Função para buscar detalhes de um Pokémon específico pelo nome ou ID
export const getPokemonDetails = async (nameOrId) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
    return response.data; // Retorna o objeto completo do Pokémon
  } catch (error) {
    console.error(`Erro ao buscar detalhes do Pokémon ${nameOrId}:`, error);
    throw error;
  }
};

// (Opcional) Função para buscar detalhes a partir da URL fornecida na lista
export const getPokemonDetailsByUrl = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes pela URL ${url}:`, error);
        throw error;
    }
};