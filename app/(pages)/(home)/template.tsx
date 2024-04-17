import React, { ReactNode } from 'react'
import Layout from '@/app/components/PageTransitions/fadeIn'

export default function Transition({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}

// original: ( must be a client component)
// <motion.div
//   initial={{ y: 26, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ ease: 'easeInOut', duration: 0.75 }}
// >
//   {children}
// </motion.div>
