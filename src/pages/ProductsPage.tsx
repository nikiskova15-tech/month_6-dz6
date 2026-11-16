import ProductsList from '../widgets/ProductsList'
import { PRODUCTS_DB } from '../shared/db'

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Каталог по брейкпоинтам</h1>
      </div>

      <ProductsList
        products={PRODUCTS_DB}
        gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      />
    </section>
  )
}
