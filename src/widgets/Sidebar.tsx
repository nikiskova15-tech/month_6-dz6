import { NavLink } from 'react-router-dom'
import { cn } from '../shared/cn'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/auto-grid', label: 'Auto-fill / Auto-fit' },
  { to: '/bento', label: 'Bento-дашборд' },
  { to: '/calendar', label: 'Календарь' },
]

export default function Sidebar() {
  return (
    <aside className="border-t bg-white p-4 md:border-r md:border-t-0">
      <nav className="grid gap-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              cn(
                'rounded-lg px-3 py-2 text-sm',
                isActive ? 'bg-black text-white' : 'hover:bg-gray-100'
              )
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}