import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import ProductsPage from '../pages/ProductsPage'
import NotFoundPage from '../pages/NotFoundPage'
import AutoGridPage from '../pages/AutoGridPage'
import BentoPage from '../pages/BentoPage'
import CalendarPage from '../pages/CalendarPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "auto-grid", element: <AutoGridPage /> },
      { path: "bento", element: <BentoPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router