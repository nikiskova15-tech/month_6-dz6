import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export default function Button({ className = '', active, children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-4 py-2 text-sm font-medium ${
        active ? 'bg-black text-white' : 'border bg-white text-gray-800'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}