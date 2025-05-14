import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename="/pelican-magazine-frontend-2025s/">
        <App />
      </BrowserRouter>

    <BrowserRouter basename="/pelican-magazine">
      <App />
    </BrowserRouter>

  </StrictMode>,
)
