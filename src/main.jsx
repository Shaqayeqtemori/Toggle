import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PasswordToggle from './PasswordToggle';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordToggle />
  </React.StrictMode>
);