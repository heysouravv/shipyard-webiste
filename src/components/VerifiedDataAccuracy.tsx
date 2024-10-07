import React from 'react'
import { CheckCircle, RefreshCw, Shield } from 'lucide-react'

const features = [
  {
    name: 'Real-time data validation',
    description: 'Ensure your data is accurate and up-to-date with continuous validation processes.',
    icon: CheckCircle,
  },
  {
    name: 'Multiple layers of checks',
    description: 'Our system employs various verification methods to maintain data integrity.',
    icon: Shield,
  },
  {
    name: 'Continuous data updates',
    description: 'Stay current with automatic updates that reflect the latest customer interactions.',
    icon: RefreshCw,
  },
]

const VerifiedDataAccuracy: React.FC = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Data Accuracy</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Your Data, Verified and Ready
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Shipyard ensures your customer data is accurate, validated, and up-to-date.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="bg-black rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <feature.icon className="h-10 w-10 text-gray-400 mr-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-100">{feature.name}</h3>
              </div>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VerifiedDataAccuracy