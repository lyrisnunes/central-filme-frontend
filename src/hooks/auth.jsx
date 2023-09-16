// hook de autenticação
import {createContext, useContext, useState} from "react";

import {api} from "../services/api"; // para usar os dados 

export const AuthContext = createContext({});

function AuthProvider({children}){
   const [data, setData] = useState([]); // começa vazio

   async function signIn({email, password}){ // precisa enviar info para back

      try{
         const response = await api.post("/sessions", {email, password}); // requisição da back
          const { user, token} = response.data; // destruturar


          api.defaults.headers.authorization = `Bearer ${token}`;
          setData({ user, token })  // armazena o usuario e o token
         
      }catch(error){
         if(error.response){
            alert(error.response.data.message);
         }else{
            alert("Não foi possivel entrar.");
         }
      }
   }

   return(
      <AuthContext.Provider value={{ signIn, user: data.user }}>
         {children} 
      </AuthContext.Provider>
   )
}

function useAuth(){
   const context = useContext(AuthContext);

   return context;
}

export {AuthProvider, useAuth};