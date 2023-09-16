import axios from "axios";

// endereço do nosso servidor
export const api = axios.create({
   baseURL: "http://localhost:2000"
});

api.get("./users/:id")