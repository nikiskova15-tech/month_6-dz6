import ProductCard from '../entities/ProductCard'
import type { ProductCardProps } from '../shared/types'

type ProductsListProps = {
  products?: ProductCardProps[]
}

export default function ProductsList({ products = [] }: ProductsListProps) {
  if (products.length === 0) {
    return <div>Ничего не нашлось.</div>
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}