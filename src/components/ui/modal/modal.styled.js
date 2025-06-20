import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  width: 90%;
  max-width: 500px;
  z-index: 1001;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 10px;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;
