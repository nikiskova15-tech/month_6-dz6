import type { ReactNode } from 'react'

export default function Content({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  )
}
