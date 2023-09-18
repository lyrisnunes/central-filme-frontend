import {RiShutDownLine } from 'react-icons/ri';
import {useAuth} from '../../hooks/auth';
import {Container, Profile, Logout} from './styles.js';

import avatarPlaceHolder  from "../../img/imagem.svg";

import { api } from "../../services/api.js";

export function Header(){
   const { signOut, user } = useAuth();

   const AvatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

   return(
      <Container>
         <Profile to="/profile">
            <img src={AvatarUrl} alt="Foto do usuário"/>

            <div>
               <span>Bem-vindo</span>
               <strong>Lyris Nunes</strong>
            </div>
         </Profile>

         <Logout onClick={signOut}>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}