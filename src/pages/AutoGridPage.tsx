import { useState } from 'react'
import ProductsList from '../widgets/ProductsList'
import { PRODUCTS_DB } from '../shared/db'
import Button from '../shared/Button'

export default function AutoGridPage() {
  const [count, setCount] = useState<2 | 6 | 12>(2)
  const [mode, setMode] = useState<'auto-fill' | 'auto-fit'>('auto-fill')

  const visibleProducts = PRODUCTS_DB.slice(0, count)

  const gridClass =
    mode === 'auto-fill'
      ? 'grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'
      : 'grid-cols-[repeat(auto-fit,minmax(240px,1fr))]'

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl">Auto-fill vs Auto-fit</h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="mr-1 text-xs font-medium text-gray-500">Карточек:</span>
            {([2, 6, 12] as const).map((num) => (
              <Button key={num} active={count === num} onClick={() => setCount(num)}>
                {num}
              </Button>
            ))}
          </div>

          <Button
            active
            onClick={() => setMode((prev) => (prev === 'auto-fill' ? 'auto-fit' : 'auto-fill'))}
          >
            Режим: {mode}
          </Button>
        </div>
      </div>

      <ProductsList products={visibleProducts} gridClassName={gridClass} />
    </section>
  )
}
