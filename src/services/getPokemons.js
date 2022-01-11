const axios = require('axios');

const axionsInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const getNextPokemons = async (next) =>
  await axionsInstance.get(`/?limit=5&offset=${next}`).then((res) => res);

export const getPokemonByName = async (name) =>
  await axionsInstance.get(`/${name}`).then((res) => res);
