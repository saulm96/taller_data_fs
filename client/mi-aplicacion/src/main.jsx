import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from "./components/Form"
import House from "./components/House"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <House />
  </StrictMode>,
)

