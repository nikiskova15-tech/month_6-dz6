import type { ButtonHTMLAttributes } from 'react'
import { cn } from './cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export default function Button({ className, active, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition',
        active
          ? 'bg-indigo-600 text-white shadow-sm'
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
