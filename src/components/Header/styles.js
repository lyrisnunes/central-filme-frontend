import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header; // cabeçalho fixo

  height: 8.5rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;

  @media (max-width: 900px) {
  padding:  2rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2rem;

    span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Logout = styled.button`
  border: none;
  background: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 2.6rem;
  }
`;
