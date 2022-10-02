import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

async function healthCheck() {
  const response = await axiosInstance.get('');
  return response;
}

async function getById(id: number): Promise<PokemonResponse> {
  const response = await axiosInstance.get(`pokemon/${id}`);
  return response.data;
}

async function getPage(
  limit: number = 10,
  offset: number = 1,
): Promise<PokemonList> {
  const response = await axiosInstance.get('pokemon', {
    params: {limit, offset},
  });
  return response.data;
}

export default {
  healthCheck,
  getById,
  getPage,
};
