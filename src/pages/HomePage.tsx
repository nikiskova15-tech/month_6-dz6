import Sidebar from '../widgets/Sidebar'
import Content from '../widgets/Content'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-amber-950">
        <Sidebar className  />

        <Content />
    </div>
  )
}