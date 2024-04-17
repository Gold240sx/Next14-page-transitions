'use client'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function InnerLayout({ children }: { children: ReactNode }) {
  const params = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div key={params}>{children}</div>
    </AnimatePresence>
  )
}
