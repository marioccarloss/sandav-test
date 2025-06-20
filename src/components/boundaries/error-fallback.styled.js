import styled from 'styled-components';

export const ErrorFallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;

  pre {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    white-space: pre-wrap;
    word-break: break-word;
    color: ${({ theme }) => theme.danger};
    max-width: 80%;
    text-align: left;
  }
`;

export const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.danger || '#e53e3e'};
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;
