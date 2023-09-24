import axios from "axios";

// endereço do nosso servidor
export const api = axios.create({
   baseURL: 'https://centralfilme-api.onrender.com'
});
