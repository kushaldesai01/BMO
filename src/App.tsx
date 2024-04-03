import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './config/Router';
import { HomeModalContext } from './context/HomeContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
