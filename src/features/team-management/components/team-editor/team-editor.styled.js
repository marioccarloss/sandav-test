import { device } from '@/theme/main-theme';
import styled from 'styled-components';

export const TeamEditorWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const TeamEditorTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const PokemonListContainer = styled.div`
  min-height: 300px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PokemonItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  margin-bottom: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:last-child {
    border-bottom: none;
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  span {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const EmptyListMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  padding: 2rem;
`;

export const FooterButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media ${device.mobileL} {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
