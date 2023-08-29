import styled from 'styled-components';
import backgroundImg from '../../img/img.png';

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 13rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   > h1{
      font-size: 3rem;
      color: ${({theme})=> theme.COLORS.ORANGE};
   }

   > p{
      font-size: 1.4rem;
      text-align: center;
      color: ${({theme})=> theme.COLORS.GRAY_100};
   }

   > h2{
      font-size: 2rem;
      margin-top: 5rem;
      margin-bottom: 2rem ;
   }

   > a{
      margin-top: 5.4rem;
      color: ${({theme})=> theme.COLORS.ORANGE};
   }
`;

export const Background = styled.div`
   flex:1;
   background: url(${backgroundImg}) no-repeat center center;
   background-size: cover;
`;