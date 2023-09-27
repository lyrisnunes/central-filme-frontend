import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      border: none;
   }

   :root{
      font-size: 62.5%;

      @media (max-width: 500px) {
      font-size: 56.5%;
      }
   }


   body{
      background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
      color: ${({theme})=> theme.COLORS.WHITE};
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
   }

   body, input, button, textarea{
      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
      outline: none;
   }

   button, a{
      cursor: pointer;
      transition: filter 0.2s;
   }

   button:hover, a:hover{
      filter: brightness(0.9);
   }


`;