import {RiShutDownLine } from 'react-icons/ri';
import {Container, Profile, Logout} from './styles.js';

import { Link } from 'react-router-dom';


export function Header(){
   return(
      <Container>
         <Profile to="/profile">
            <img src="https://github.com/lyrisnunes.png" alt="Foto do usuário" />

            <div>
               <span>Bem-vindo</span>
               <strong>Lyris Nunes</strong>
            </div>
         </Profile>

         <Logout>
            <RiShutDownLine/>
         </Logout>
      </Container>
   )
}