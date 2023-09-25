import {RiShutDownLine } from 'react-icons/ri';
import {useAuth} from '../../hooks/auth';
import {Container, Profile, Logout} from './styles.js';

import avatarPlaceHolder  from "../../img/imagem.svg";

import { api } from "../../services/api.js";
import { useNavigate } from 'react-router-dom';

export function Header(){
   const { signOut, user } = useAuth();

   const navigation = useNavigate();

   function handleSignOut(){
      navigation("/");
      signOut();
   }

   const AvatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

   return(
      <Container>
         <Profile to="/profile">
            <img src={AvatarUrl} alt="Foto do usuário"/>

            <div>
               <span>Bem-vindo - <span>Central filme</span></span>
               <strong>{user.name}</strong>
            </div>
         </Profile>

         <Logout onClick={handleSignOut}>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}