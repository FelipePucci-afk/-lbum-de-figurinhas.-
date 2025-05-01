// src/services/pokeapi.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 151, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`, {
      params: {
        limit: limit,
        offset: offset,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar lista de Pokémon:", error);
    throw error;
  }
};

export const getPokemonDetails = async (nameOrId) => {
  try {
    // Garante que o nome/id seja minúsculo para a API
    const lowerCaseNameOrId = typeof nameOrId === 'string' ? nameOrId.toLowerCase() : nameOrId;
    const response = await axios.get(`${BASE_URL}/pokemon/${lowerCaseNameOrId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do Pokémon ${nameOrId}:`, error);
    throw error;
  }
};


export const getPokemonDetailsByUrl = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes pela URL ${url}:`, error);
        throw error;
    }
};
