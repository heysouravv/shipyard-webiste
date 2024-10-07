import React from 'react'
import { DollarSign, Clock, Heart, Percent } from 'lucide-react'

const segments = [
  { icon: DollarSign, title: 'High-spending customers', description: 'Identify and target your most valuable customers' },
  { icon: Clock, title: 'Frequent visitors', description: 'Engage with customers who regularly interact with your brand' },
  { icon: Heart, title: 'Loyal shoppers', description: 'Reward and retain customers who have shown long-term loyalty' },
  { icon: Percent, title: 'Value seekers', description: 'Tailor offers for price-sensitive customers' },
]

const CustomerSegmentation: React.FC = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Segmentation</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Segment your customers with precision
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Shipyard's powerful segmentation tools help you understand and target your customers effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {segments.map((segment) => (
            <div key={segment.title} className="bg-black rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <segment.icon className="h-10 w-10 text-gray-400 mr-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-100">{segment.title}</h3>
              </div>
              <p className="text-gray-400 text-lg">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerSegmentation