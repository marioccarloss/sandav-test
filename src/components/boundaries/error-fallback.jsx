import React from 'react';
import Button from '../ui/button/button';
import { ErrorFallbackWrapper, ErrorMessage, ErrorTitle } from './error-fallback.styled';

const ErrorFallback = ({ error }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ErrorFallbackWrapper>
      <ErrorTitle>¡Ups! Algo salió mal</ErrorTitle>
      <ErrorMessage>
        Parece que hemos encontrado un error. Por favor, intenta recargar la página.
      </ErrorMessage>
      {error && <pre>{error.message}</pre>}
      <Button onClick={handleReload} variant="primary">
        Recargar Página
      </Button>
    </ErrorFallbackWrapper>
  );
};

export default ErrorFallback;
