import { useState } from "react";
import { Container, Form, Avatar } from "./styles.js";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { api } from "../../services/api.js";
import avatarPlaceHolder  from "../../img/imagem.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {useAuth} from '../../hooks/auth'; // hookes de autenticação

import { Link } from 'react-router-dom';

export function Profile() {
  const {user, updateProfile} = useAuth();

  const [ name, setName] = useState(user.name);
  const [ email, setEmail] = useState(user.email);
  const [ passwordOld, setPasswordOld] = useState();
  const [ password, setPassword] = useState();

  const AvatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [avatar, setAvatar] = useState(AvatarUrl); 
  const [avatarFile, setAvatarFile] = useState(null); // carregar nova img


  async function handleUpdate(){
    const user = {
      name, 
      email,
      password: password,
      old_password: passwordOld,
    }

    await updateProfile({user, avatarFile});// passar informações
  }

  //event de alteração da imagem
  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file); // carrega nova imagem

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview)
    
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="foto usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar}  />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
