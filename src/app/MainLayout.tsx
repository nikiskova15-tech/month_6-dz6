import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../widgets/Header'
import Sidebar from '../widgets/Sidebar'
import Footer from '../widgets/Footer'
import Loader from '../shared/Loader'

export default function MainLayout() {
  const navigation = useNavigation()

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50">
      <Header />
      {navigation.state === 'loading' && <Loader />}

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <div className="order-2 md:order-1">
          <Sidebar />
        </div>
        <main className="order-1 p-6 md:order-2">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}