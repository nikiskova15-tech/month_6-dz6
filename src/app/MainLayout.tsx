import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../widgets/Header'
import Loader from '../shared/Loader'
import Sidebar from '../widgets/Sidebar'
import Footer from '../widgets/Footer'
import Content from '../widgets/Content'


export default function MainLayout() {
  const navigation = useNavigation()

  return (
     <div className="flex min-h-screen flex-col">
      <Header />
      {navigation.state === 'loading' && <Loader />}

      <div className="grid flex-1 grid-cols-1 md:grid-cols-[240px_1fr]">
        <div className="order-2 flex flex-col md:order-1">
          <Sidebar />
        </div>
        <div className="order-1 flex flex-col md:order-2">
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>

      <Footer />
    </div>
  )
}