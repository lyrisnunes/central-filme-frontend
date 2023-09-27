import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }

    button {
      background: none;
      border: none;
    }

    @media (max-width: 900px) {
    padding: 0 2rem;
     
    }
  }
`;

export const Form = styled.form`
  width: 34rem;
  margin: 2rem auto;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.7rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
    border: 2px solid ${({ theme }) => theme.COLORS.RED};
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 7rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
