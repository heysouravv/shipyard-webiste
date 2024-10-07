import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ChallengesSolved from './components/ChallengesSolved'
import CustomerSegmentation from './components/CustomerSegmentation'
import CustomerInsights from './components/CustomerInsights'
import VerifiedDataAccuracy from './components/VerifiedDataAccuracy'
import PersonalizedOffers from './components/PersonalizedOffers'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Header />
      <main>
        <Hero />
        <ChallengesSolved />
        <CustomerSegmentation />
        <CustomerInsights />
        <VerifiedDataAccuracy />
        <PersonalizedOffers />
        <CallToAction />
      </main>
    </div>
  )
}

export default App