import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    `}

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const Checkmark = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: scale(${({ $isSelected }) => ($isSelected ? 1 : 0)});
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;

  &::after {
    content: '✔';
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${({ theme }) => theme.background};
    border-radius: 50%;
  }
`;

export const EmptySlot = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;
