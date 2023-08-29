import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;

   background-color: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.BACKGROUND_900 };
   color: ${({theme})=> theme.COLORS.GRAY_300};

   border: ${({theme, isNew})=> isNew ? `1px dashed  ${theme.COLORS.WHITE} ` : "none" };

   margin-bottom: 8px;
   border-radius: 1rem;
   padding-right:1.6rem;

   > button {
      background:none;
   }

   .button-delete{
      color: ${({theme}) => theme.COLORS.RED};
   }

   .button-add{
      color: ${({theme}) => theme.COLORS.ORANGE};
   }

   > input{
      height: 5.6rem;
      width: 100%;
      padding-left:1rem;

      color: ${({theme})=> theme.COLORS.WHITE};
      background: transparent;
      
      &::placeholder{
         color: ${({theme}) => theme.COLORS.GRAY_300};
      }
   }

`;