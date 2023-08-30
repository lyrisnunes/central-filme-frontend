import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import {Button} from "../../components/Button";

import {Link} from 'react-router-dom';

import { Container, Form } from "./styles";

export function New() {
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
            <NoteItem value="https://www.rocketseat.com.br/" />
            <NoteItem placeholder="Novo link" isNew />
          </Section>

          <Section>
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem placeholder="Novo Tag" isNew />
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}
