import {FiPlus} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote } from './styles';



import {Header} from '../../components/Header';
import {ButtonText} from '../../components/ButtonText';
import { Input } from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';


export function Home(){
   return(
      <Container>
         <Brand>
         <h1>
          Central<span>.</span>Filme
        </h1>
         </Brand>

         <Header/>

         <Menu>
            <li>
               <ButtonText title="Todos" $isactive/>
            </li>
            <li>
               <ButtonText title="Filmes"/>
            </li>
         </Menu>

         <Search>
            <Input placeholder="Pesquisa pelo título" />
         </Search>

         <Content>
            <Section title="Meus filmes">
               <Note data={{
                  title:'filme',
                   tags: [
                     {id: '1', name: 'Barbie'},
                     {id: '2', name: 'Desenho'},
                     ]      
                   }}/>
            </Section>
         </Content>
         <NewNote to="/new">
            <FiPlus/>
            Criar Nota
         </NewNote>
      </Container>
   );
}