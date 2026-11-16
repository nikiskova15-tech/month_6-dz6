import type { ReactNode } from 'react'

export default function Content({ children }: { children: ReactNode }) {
  return <main className="p-6">{children}</main>
}
