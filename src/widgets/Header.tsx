import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Grid-галерея раскладок
        </Link>
      </div>
    </header>
  )
}
