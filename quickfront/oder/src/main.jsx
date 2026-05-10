import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './Routes/AppRouter';
import './home.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  </StrictMode>,
)
