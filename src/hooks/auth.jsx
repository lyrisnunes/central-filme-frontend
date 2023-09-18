// hook de autenticação
import {createContext, useContext, useState, useEffect} from "react";

import {api} from "../services/api"; 

export const AuthContext = createContext({});

function AuthProvider({children}){
   const [data, setData] = useState({});

   async function signIn({email, password}){ 

      try{
         const response = await api.post("/sessions", {email, password}); 
          const { user, token} = response.data; 


          localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
          localStorage.setItem("@rocketnotes:token", token);

          api.defaults.headers.common['authorization'] = `Bearer ${token}`;
          setData({ user, token })  // armazena o usuario e o token
         
      }catch (error) {
         if(error.response) {
           alert(error.response.data.message);
         } else {
           alert("Não foi possível fazer o login.")
         }
      }
   }

   async function updateProfile({user, avatarFile}){// receber dados do usuario 
      
      try{
         if(avatarFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile); // novo formulario e adc dentro do campo avatar com o img 

            const response = await api.patch("/users/avatar", fileUploadForm);// fazer requisição e enviar o formulario
            user.avatar = response.data.avatar;
         }

         await api.put("/users", user); // buscar users
         localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); // atualizar no local 

         setData({user, token:data.token }) // para salvar alteração
         alert("Perfil atualizado");

      }catch(error){
         if(error.response){
            alert(error.response.data.message);
         }else{
            alert("Não foi possivel atualizar o perfil.");
         }
      }
   }

   
   function signOut(){
      //buscar informação do token, user
      const token = localStorage.removeItem("@rocketnotes:token");
      const user = localStorage.removeItem("@rocketnotes:user");

      // para sair 
      setData({});


   }

   useEffect(() => {
      //buscar informação do token, user
      const token = localStorage.getItem("@rocketnotes:token");
      const user = localStorage.getItem("@rocketnotes:user");

      // verificação se forem informados
      if(token && user){
         api.defaults.headers.common['authorization'] = `Bearer ${token}`;

         // armazene
         setData({
            token,
            user: JSON.parse(user)
         })
      }

   
   }, [])

   return(
      <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user}}>
         {children} 
      </AuthContext.Provider>
   )
}

function useAuth(){
   const context = useContext(AuthContext);

   return context;
}

export {AuthProvider, useAuth};