import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">Grid-галерея раскладок</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/products" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
          Перейти к каталогу
        </Link>
      </div>
    </div>
  )
}
