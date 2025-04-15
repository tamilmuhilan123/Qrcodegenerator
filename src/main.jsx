import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QrcodeGenerator from './QrcodeGenerator'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrcodeGenerator/>
  </StrictMode>,
)
