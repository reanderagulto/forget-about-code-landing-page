import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/scss/main.scss';
import Homepage from '@pages/Homepage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Homepage />
    </main>
  </React.StrictMode>
)
