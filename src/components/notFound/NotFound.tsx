import React from 'react';

interface NotFoundProps {
  errorMessage: string;
}

export default function NotFound({ errorMessage }: NotFoundProps) {
  return <div>{errorMessage}</div>;
}
