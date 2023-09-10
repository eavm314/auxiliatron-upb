import axios from 'axios';

export const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/', // Cambia esta URL por tu API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});