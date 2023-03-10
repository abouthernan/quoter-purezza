import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/styles/index.css'
import { DataProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
)
