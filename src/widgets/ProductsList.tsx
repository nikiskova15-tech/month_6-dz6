import ProductCard from '../entities/ProductCard'
import type { ProductCardProps } from '../shared/types'
import { cn } from '../shared/cn'

type ProductsListProps = {
  products?: ProductCardProps[]
  gridClassName?: string
}

export default function ProductsList({
  products = [],
  gridClassName = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}: ProductsListProps) {
  if (products.length === 0) {
    return <div className="text-gray-500">Ничего не нашлось.</div>
  }

  return (
    <div className={cn('grid gap-6', gridClassName)}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
