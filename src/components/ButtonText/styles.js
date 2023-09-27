import styled from 'styled-components'

export const Container = styled.button`
   background: none;
   color: ${({theme, $isactive}) => $isactive  ? theme.COLORS.RED : theme.COLORS.GRAY_100};

   border: none;
   font-size: 1.6rem;
`;