import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import ProductsPage from '../pages/ProductsPage'
import AutoGridPage from '../pages/AutoGridPage'
import BentoPage from '../pages/BentoPage'
import CalendarPage from '../pages/CalendarPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: 'auto-grid', element: <AutoGridPage /> },
      { path: 'bento', element: <BentoPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])