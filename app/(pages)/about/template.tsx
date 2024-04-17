'use client'
import React, { ReactNode } from 'react'
import Layout from '../../components/PageTransitions/pageSlide/index'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const InnerTemplate = Layout

export default function Transition({ children }: { children: ReactNode }) {
  const params = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <InnerTemplate>
        <div key={params}>{children}</div>
      </InnerTemplate>
    </AnimatePresence>
  )
}
