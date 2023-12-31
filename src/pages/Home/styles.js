import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container  = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-columns: 20rem auto;
   grid-template-rows: 8.5rem 9rem auto 6.4rem;
   grid-template-areas: 
   "brand header"
   "menu search"
   "menu content"
   "newnote content";

   background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};

   @media (max-width: 900px){
      display: flex;
      flex-direction: column;
   }

`;

export const Brand = styled.div`
   grid-area: brand;

   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_800};

   background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};

   > h1{
      font-size: 2.2rem;
   }

   h1 > span{
      color: ${({theme})=> theme.COLORS.RED};
   }

   @media (max-width: 900px) {
      > h1{
      padding: 1rem;
   }
   }
`;

export const Menu = styled.ul`
      grid-area: menu;

      background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
      padding-top: 6.4rem;
      text-align: center;

      > li{
         margin-bottom: 1rem;
      }

      @media (max-width: 900px) {
        padding: 1rem;
      }

`;

export const Search = styled.div`
      grid-area: search;
      padding:  3rem;

`;

export const Content = styled.div`
   grid-area: content;
   padding: 0 3rem ;
   overflow-y: auto;

`;

export const NewNote = styled(Link)`
      grid-area: newnote;
      background-color: ${({theme})=> theme.COLORS.RED};
      color: ${({theme})=> theme.COLORS.WHITE};

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;

      > svg{
         margin-right: .8rem;
      }

      @media (max-width: 900px) {
         padding: 2rem;
      }      
`;