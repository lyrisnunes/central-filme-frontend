import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState(""); 

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState(""); 

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]); //estado anterior acessar pelo prevState
    setNewLink(""); // LIMPAR O CAMPO
  }

  function handleRemoveLink(deleted){ // retorna todos links menos o link que eu deletar
    setLinks(prevState => prevState.filter(link => link !== deleted));// armazena no setLinks
  }

  function handleAddTag(){// prevstate tudoo que estava antes
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleDeleteTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observação" />

          <Section title="Links úteis">
            {links.map((link,index) => (// buscar informações que está no estado link
              <NoteItem
                key={String(index)}
                value={link} // pegar valor
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
            {
              tags.map((tag, index)=>(
                <NoteItem
                key={String(index)} // recebe a posição
                 value={tag} 
                  onClick={()=> handleDeleteTag(tag)} // passa tag para deletar
                 />
              ))
            }

              <NoteItem 
              isNew 
              placeholder="Novo Tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
               />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
