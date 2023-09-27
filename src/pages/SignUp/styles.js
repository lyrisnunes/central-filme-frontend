import styled from 'styled-components';
import backgroundImg from '../../img/foto.jpg';

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;

   @media (max-width: 1000px) {
      text-align: center;
      justify-content: center;
   }
`;

export const Form = styled.form`
   padding: 0 13.6rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   > h1{
      font-size: 3rem;
      margin-bottom: .4rem;
      margin-top: 3rem;
      color: ${({theme})=> theme.COLORS.RED};
   }

   > p{
      font-size: 1.3rem;
      text-align: center;
      color: ${({theme})=> theme.COLORS.GRAY_100};
   }

   > h2{
      font-size: 2rem;
      margin-top: 4rem;
      margin-bottom: 1rem ;
   }

   > a{
      margin: 3rem 0;
      color: ${({theme})=> theme.COLORS.RED};
   }
   

  
`;

export const Background = styled.div`
   flex:1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;

   @media (max-width: 1000px) {
      display: none;
   }
`;