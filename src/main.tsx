import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterProvider from '@/routes'

import './style.css'

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
)
