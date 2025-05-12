import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Check from './check.jsx'

createRoot(document.getElementById('root')).render(

    <>
    <App />
    <Check />
    </>

) 
