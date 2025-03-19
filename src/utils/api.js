// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.chucknorris.io',
});

// export const getRandomJoke = async (category) => {
//   return  await api.get(`/jokes/random${category ? `?category=${category}` : ''}`);

// };


export const getRandomJoke = async (category) => {
    try {
      const response = await api.get(`/jokes/random${category ? `?category=${category}` : ''}`);
      return response.data; // Devuelve solo los datos de la respuesta
    } catch (error) {
      console.error('Error fetching joke:', error);
      throw error; // Lanza el error para manejarlo en el thunk o saga
    }
  };
export const getCategories = async () => {
    try {
      const response = await api.get('/jokes/categories');
      // Asegúrate de que la respuesta sea un array
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      // En caso de error, retorna un array vacío
      return [];
    }
  };