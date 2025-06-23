import React from 'react'
import Hero from '@/components/general/Hero'
import About from '@/components/general/About'
import Features from '@/components/general/Features'
import WaitingList from '@/components/general/WaitingList'
import Contact from '@/components/general/Conctact'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WaitingList />
      <Features />
      <Contact />
    </div>
  )
}
