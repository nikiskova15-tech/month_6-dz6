import { useState } from 'react'
import ProductCard from '../entities/ProductCard'
import { PRODUCTS } from '../shared/db'
import Button from '../shared/Button'

type CardCount = 2 | 6 | 12
type GridMode = 'auto-fill' | 'auto-fit'

const COUNTS: CardCount[] = [2, 6, 12]

export default function AutoGridPage() {
  const [count, setCount] = useState<CardCount>(2)
  const [mode, setMode] = useState<GridMode>('auto-fill')

  const gridCols =
    mode === 'auto-fill'
      ? 'grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'
      : 'grid-cols-[repeat(auto-fit,minmax(240px,1fr))]'

  return (
    <div className="grid gap-6">
      <div className="grid grid-flow-col justify-start gap-2">
        {COUNTS.map((n) => (
          <Button key={n} active={count === n} onClick={() => setCount(n)}>
            {n} шт.
          </Button>
        ))}

        <Button
          onClick={() =>
            setMode((m) => (m === 'auto-fill' ? 'auto-fit' : 'auto-fill'))
          }
        >
          Режим: {mode}
        </Button>
      </div>

      <div className={`grid gap-6 ${gridCols}`}>
        {PRODUCTS.slice(0, count).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
