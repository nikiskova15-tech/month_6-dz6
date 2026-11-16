import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../widgets/Header'
import Loader from '../shared/Loader'
import Saidbar from '../widgets/Sidebar'
import Footer from '../widgets/Footer'

export default function MainLayout() {
  const navigation = useNavigation()

  return (
    <div className='min-h-screen'>
      <Header />
      {navigation.state === 'loading' && <Loader />}

      <div className='grid grid-cols-2'>
        <Saidbar />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}