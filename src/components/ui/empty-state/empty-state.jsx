import React from 'react';
import SearchIcon from '../icons/search-icon';
import { EmptyStateIcon, EmptyStateMessage, EmptyStateWrapper } from './empty-state.styled';

const EmptyState = ({ message }) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateIcon>
        <SearchIcon width="48" height="48" />
      </EmptyStateIcon>
      <EmptyStateMessage>{message}</EmptyStateMessage>
    </EmptyStateWrapper>
  );
};

export default EmptyState;
