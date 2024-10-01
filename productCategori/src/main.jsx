import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from './utills/context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App/>
  </AppProvider>
    
  
)
