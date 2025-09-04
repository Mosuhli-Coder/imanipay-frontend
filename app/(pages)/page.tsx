import React from 'react'
import Hero from '@/components/general/Hero'
import About from '@/components/general/About'
import Features from '@/components/general/Features'
import WaitingList from '@/components/general/WaitingList'
import AI from '@/components/general/AI'
import PublicRoute from '@/components/auth/PublicRoute'

export default function Home() {
  return (
    <PublicRoute>
      <div>
        <Hero />
        <About />
        <AI />
        <WaitingList />
        <Features />
      </div>
    </PublicRoute>
  )
}
