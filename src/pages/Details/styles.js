import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 10.5rem auto;
   grid-template-areas: 
   "header"
   "content";
   
   > main {
      grid-area: content;
      overflow-y: scroll; 
      padding: 1.1rem 0;
   }
   
`;

export const Links = styled.ul`


> li{
   margin-top: 1rem;
   list-style: none;
   font-size: 1.4rem;

   a{
      color: ${({theme})=> theme.COLORS.WHITE};
   }
}
`;

export const Content = styled.div`
   max-width: 55rem;
   margin: 0 auto;

   display: flex;
   flex-direction: column;

   >button:first-child{
      align-self: end;
   }

   h1{
      font-size: 3rem;
      font-weight: 500;
      padding-top: 6rem;
   }

   > p{
      font-size: 1.4rem;
      margin-top: 1.6rem;
      text-align: justify;
   }
`;