import styled from 'styled-components';

export const TeamListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const TeamCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
    text-transform: capitalize;
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
    }
  }
`;

export const TeamActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: auto;
`;
