import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter basename="/pelican-magazine-frontend-2025s/">
        <App />
      </BrowserRouter>
=======
    <BrowserRouter basename="/pelican-magazine">
      <App />
    </BrowserRouter>
>>>>>>> aef263f800d36106f86f24459fc66f5f03519924
  </StrictMode>,
)
