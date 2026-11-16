export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: string
  onClick?: () => void
}

export type ProductCardProps = {
    id: number
    img?: string
    title: string
    description: string
}