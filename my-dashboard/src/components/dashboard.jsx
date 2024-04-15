import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionBar from './components/TransactionBar';

const ErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setHasError(true);
      console.error(error, errorInfo);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      <Dashboard />
      <TransactionBar />
    </div>
  );
};

export default ErrorBoundary;