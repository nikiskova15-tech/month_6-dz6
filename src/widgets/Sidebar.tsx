import { NavLink } from 'react-router-dom'
import { cn } from '../shared/cn'

const NAV_ITEMS = [
  { to: '/', label: 'Главная' },
  { to: '/products', label: 'Каталог' },
  { to: '/auto-grid', label: 'Auto-fill / Auto-fit' },
  { to: '/bento', label: 'Bento-дашборд' },
  { to: '/calendar', label: 'Календарь' },
]

export default function Sidebar() {
  return (
    <aside className="border-t border-gray-200 bg-white p-4 md:border-r md:border-t-0">
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'rounded-xl px-4 py-2.5 text-sm font-medium transition',
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
