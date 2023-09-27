import styled from 'styled-components';

export const Container = styled.span`
   font-size: 1.2rem;
   padding: 5px 1.4rem;
   border-radius: 5px;
   margin-right:6px ;
   color: ${({theme})=> theme.COLORS.BACKGROUND_900};
   background-color:${({theme})=> theme.COLORS.RED};
`;