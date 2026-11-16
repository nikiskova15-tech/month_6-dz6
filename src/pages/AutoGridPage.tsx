import { useState } from 'react'
import ProductCard from '../entities/ProductCard'
import { PRODUCTS } from '../shared/db'

export default function AutoGridPage() {
  const [count, setCount] = useState<2 | 6 | 12>(2)
  const [mode, setMode] = useState<'auto-fill' | 'auto-fit'>('auto-fill')

  const gridCols =
    mode === 'auto-fill'
      ? 'grid-cols-[repeat(auto-fill,minmax(220px,1fr))]'
      : 'grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'

  return (
    <div className="grid gap-6">
      <div className="grid grid-flow-col justify-start gap-2">
        {([2, 6, 12] as const).map((n) => (
          <button
            key={n}
            onClick={() => setCount(n)}
            className={`rounded border px-3 py-1 text-sm ${
              count === n ? 'bg-black text-white' : ''
            }`}
          >
            {n} шт.
          </button>
        ))}

        <button
          onClick={() =>
            setMode((m) => (m === 'auto-fill' ? 'auto-fit' : 'auto-fill'))
          }
          className="rounded border bg-gray-100 px-3 py-1 text-sm font-medium"
        >
          Режим: {mode}
        </button>
      </div>

      <div className={`grid gap-4 ${gridCols}`}>
        {PRODUCTS.slice(0, count).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
