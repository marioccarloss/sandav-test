import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  grid-column: 1 / -1; /* Make it span all columns in a grid */
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.textMuted};
`;

export const EmptyStateMessage = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
`;
