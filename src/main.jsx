import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove the initial loader (if present) as soon as the app is ready to render
const initialLoader = document.getElementById('initial-loader')
if (initialLoader) {
  try {
    initialLoader.remove()
  } catch (e) {
    // ignore removal errors
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
