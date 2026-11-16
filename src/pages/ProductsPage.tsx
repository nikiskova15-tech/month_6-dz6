import ProductCard from '../entities/ProductCard'
import { PRODUCTS } from '../shared/db'

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {PRODUCTS.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  )
}