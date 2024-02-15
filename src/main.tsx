import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Rendering the root component wrapped in StrictMode using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
