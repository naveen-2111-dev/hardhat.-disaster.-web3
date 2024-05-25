import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContractContextProvider } from '../context/ContractContext.jsx'
import './Global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContractContextProvider>
      <App />
    </ContractContextProvider>
  </React.StrictMode>,
)
