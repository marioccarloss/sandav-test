import { device } from '@/theme/main-theme';
import styled from 'styled-components';

export const TeamBuilderWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const SelectorWrapper = styled.div`
  flex: 2;
  overflow-y: auto;
  padding-right: 1rem;

  @media (${device.tablet}) {
    flex: inherit;
    height: 60vh;
    padding-right: 0;
    overflow: hidden;
  }
`;

export const EditorWrapper = styled.div`
  flex: 1;
`;

export const PageTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
