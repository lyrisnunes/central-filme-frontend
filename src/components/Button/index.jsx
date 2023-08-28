import {Container} from './styles.js'

export function Button({title, loading  = false, ...rest}){
   return(
      <Container 
      type='button'
      disabled={loading} // desabilita o button
      {...rest} // passar todas propriedades
      >
         { loading ? 'Carregando' : title} 
      </Container>
   )
}