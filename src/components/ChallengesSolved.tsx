import React from 'react'
import { Database, Users, TrendingUp, Target, LineChart } from 'lucide-react'

const challenges = [
  { icon: Database, text: 'Scattered data across multiple platforms' },
  { icon: Users, text: 'Inconsistent customer profiles' },
  { icon: TrendingUp, text: 'Difficulty in identifying high-value customers' },
  { icon: Target, text: 'Inefficient personalization' },
  { icon: LineChart, text: 'Lack of actionable insights' },
]

const ChallengesSolved: React.FC = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl mb-16 text-center">
          Are you facing these challenges with your customer data?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {challenges.map((challenge) => (
            <div key={challenge.text} className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <challenge.icon className="h-10 w-10 text-gray-400 mr-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-100">{challenge.text}</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Shipyard helps you overcome this challenge with our unified data platform.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChallengesSolved