import type { ProductCardProps } from "../shared/types"
import Button from '../shared/Button'

const ProductCard = ({ img, title, description }: ProductCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-3xl" aria-hidden="true">
        <img src={img} alt={title} className="h-48 w-full object-cover"/>
      </div>

      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-gray-600">{description}</p>
      
      <Button active className="mt-6 w-full">
        Подробнее
      </Button>
    </div>
  )
}