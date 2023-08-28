import {Container, Links, Content} from './styles.js';

import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import {Section} from '../../components/Section/index.jsx';
import {Tag} from '../../components/Tag/index.jsx';
import {ButtonText} from '../../components/ButtonText';



export function Details(){
   return(
      <Container>
         <Header/>

         <main>
            <Content>

         <ButtonText title="Excluir nota"/>

         <h1>Introdução ao React</h1>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ducimus corrupti modi recusandae ea nam, amet itaque doloremque voluptatum quisquam sapiente illum odit assumenda eum architecto reprehenderit, officia a non.</p>

         <Section title="Links úteis">
            <Links>
               <li><a href="#">https://www.rocketseat.com.br/</a></li>
               <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
         </Section>

         <Section title="Marcadores">
            <Tag title="nodejs"/>
            <Tag title="express"/>
         </Section>

         

         <Button title="Voltar" />
         </Content>
         </main>

      </Container>
   )
}