import { typeColors } from '@/theme/type-colors';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${({ color }) => color} 60%,
    ${({ theme }) => theme.cardBg} 40%
  );
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  margin-bottom: 1.5rem;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-5px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 10px 20px rgba(0, 0, 0, 0.1)'};
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -50px;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const PokemonNumber = styled.p`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.6;
  margin: 0.5rem 0 0;
`;

export const PokemonName = styled.h3`
  font-size: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0.25rem 0 1rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const TypePill = styled.span`
  background-color: ${({ type }) => typeColors[type] || '#ccc'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Checkmark = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.secondary};
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
