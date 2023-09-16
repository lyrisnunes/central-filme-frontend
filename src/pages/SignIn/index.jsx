import { useState} from 'react'
import {Container, Form, Background} from './styles';
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignIn(){
      const [email, setEmail] = useState("");
      const [password, setPassord] = useState("");

      const {signIn} = useAuth();

      function handleSignIn(){
         signIn({email, password})
      }
   return(
      <Container>
         <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciador seus links úteis.</p>

            <h2>Faça seu login</h2>

            <Input placeholder="e-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="senha" type="password" icon={FiLock} onChange={e => setPassord(e.target.value)}/>

            <Button title="Entrar" onClick={handleSignIn}/>

            <Link to="/register">Criar conta</Link>
         </Form>
         <Background/>
      </Container>
   )
}